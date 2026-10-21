// Fluxo completo do verificador com Firestore, Stripe e e-mail simulados.
const test = require("node:test");
const assert = require("node:assert");
const { executar, NOTIFICAR } = require("../index");

// ====== Firestore falso em memória ======
const docs = new Map(); // "colecao/id" -> dados
const ts = (ms) => ({ toMillis: () => ms, toDate: () => new Date(ms) });
const snapshot = (ref) => {
  const data = docs.get(ref.path);
  return { id: ref.id, ref, exists: !!data, data: () => data && { ...data }, get: (f) => data?.[f] };
};
const docRef = (col, id) => ({
  id, path: `${col}/${id}`,
  get: async function () { return snapshot(this); },
  set: async function (d, opts) { docs.set(this.path, opts?.merge ? { ...docs.get(this.path), ...d } : { ...d }); },
  update: async function (d) { docs.set(this.path, { ...docs.get(this.path), ...d }); },
});
const db = {
  collection: (col) => ({
    doc: (id) => docRef(col, id),
    where: (field, op, value) => ({
      get: async () => ({
        docs: [...docs.keys()].filter((p) => p.startsWith(`${col}/`) && docs.get(p)[field] === value)
          .map((p) => snapshot(docRef(col, p.slice(col.length + 1)))),
      }),
    }),
  }),
  runTransaction: async (fn) => fn({ get: (r) => r.get(), set: (r, d) => r.set(d), update: (r, d) => r.update(d) }),
};

// ====== Stripe falso: devolve os eventos com created >= created[gte], mais novos primeiro ======
let eventos = [];
const chamadasStripe = [];
const stripe = async (path, params) => {
  assert.equal(path, "events");
  chamadasStripe.push(params);
  const lista = eventos.filter((e) => e.created >= params["created[gte]"]).sort((a, b) => b.created - a.created);
  const inicio = params.starting_after ? lista.findIndex((e) => e.id === params.starting_after) + 1 : 0;
  const page = lista.slice(inicio, inicio + 2); // páginas pequenas para testar a paginação
  return { data: page, has_more: inicio + 2 < lista.length };
};

// ====== E-mail falso ======
let emails = [];
let falharEmail = false;
const enviarEmail = async (email) => {
  if (falharEmail) throw new Error("Resend fora do ar");
  emails.push(email);
};

// ====== Helpers ======
const AGORA = 1_800_000_000_000; // ms
let seq = 0;
const pagamento = (extra = {}, segundosAtras = 60) => {
  seq++;
  eventos.push({
    id: `evt_${seq}`, type: "checkout.session.completed", created: AGORA / 1000 - segundosAtras,
    data: { object: { id: `cs_${seq}`, payment_status: "paid", amount_total: 450000, currency: "brl",
      customer_details: { name: "ANA SILVA", email: "ana@exemplo.com" }, payment_link: "plink_123", ...extra } },
  });
};
const presente = (id, minutosAtras) => docs.set(`presentes/${id}`, {
  presente: "Cachorrinho", valorSugerido: 4000, nome: "Ana", mensagem: "Parabéns!", status: "aguardando",
  criadoEm: ts(AGORA - minutosAtras * 60000),
});
const rodar = (minutosDepois = 0) => executar({ db, stripe, enviarEmail, agora: AGORA + minutosDepois * 60000 });

test.beforeEach(() => { docs.clear(); eventos = []; emails = []; chamadasStripe.length = 0; falharEmail = false; });

test("e-mails vão só para o Bruno", () => {
  assert.deepEqual(NOTIFICAR, ["bruno.diego.yoshikawa@gmail.com"]);
});

test("pagamento confirmado marca como pago e envia 1 e-mail", async () => {
  presente("abc", 1);
  pagamento({ client_reference_id: "abc" });
  const r = await rodar();
  const d = docs.get("presentes/abc");
  assert.equal(d.status, "pago");
  assert.equal(d.valorPago, 4500);
  assert.equal(d.notificado, true);
  assert.equal(emails.length, 1);
  assert.match(emails[0].subject, /Presente pago: Cachorrinho/);
  assert.deepEqual(r, { eventos: 1, pagos: 1, naoPagos: 0, emails: 1, errosEmail: 0 });
});

test("primeira execução busca 7 dias; as seguintes continuam do último evento", async () => {
  pagamento({}, 120);
  await rodar();
  assert.equal(chamadasStripe[0]["created[gte]"], AGORA / 1000 - 7 * 86400);
  assert.equal(docs.get("config/verificador").cursorEventos, AGORA / 1000 - 120);
  await rodar(5);
  assert.equal(chamadasStripe.at(-1)["created[gte]"], AGORA / 1000 - 120);
});

test("evento repetido (rodar de novo) não manda e-mail de novo", async () => {
  presente("abc", 1);
  pagamento({ client_reference_id: "abc" });
  await rodar();
  await rodar(5);
  assert.equal(emails.length, 1);
});

test("pagina os eventos do Stripe", async () => {
  for (let i = 0; i < 5; i++) pagamento({}, 100 + i);
  const r = await rodar();
  assert.equal(r.eventos, 5);
  assert.equal(r.pagos, 5);
});

test("sessão ainda não paga é ignorada", async () => {
  presente("abc", 1);
  pagamento({ client_reference_id: "abc", payment_status: "unpaid" });
  await rodar();
  assert.equal(docs.get("presentes/abc").status, "aguardando");
  assert.equal(emails.length, 0);
});

test("pagamento sem registro no site cria um registro e avisa", async () => {
  pagamento({});
  await rodar();
  const d = docs.get(`presentes/stripe_cs_${seq}`);
  assert.equal(d.status, "pago");
  assert.equal(d.semRegistro, true);
  assert.match(emails[0].subject, /sem mensagem no site/);
});

test("só marca como não pago depois de 30 minutos", async () => {
  presente("novo", 10);
  presente("velho", 31);
  await rodar();
  assert.equal(docs.get("presentes/novo").status, "aguardando");
  assert.equal(docs.get("presentes/velho").status, "nao_pago");
  assert.equal(emails.length, 1);
  assert.match(emails[0].subject, /não pago: Cachorrinho — Ana/);
  await rodar(5);
  assert.equal(emails.length, 1); // não repete
});

test("pagou depois do aviso de não pago: vira pago e manda outro e-mail", async () => {
  presente("velho", 31);
  await rodar();
  pagamento({ client_reference_id: "velho" }, -60); // concluído depois da primeira execução
  await rodar(5);
  const d = docs.get("presentes/velho");
  assert.equal(d.status, "pago");
  assert.equal(d.pagoAposAviso, true);
  assert.equal(emails.length, 2);
  assert.ok(emails[1].linhas.some(([, v]) => /o pagamento chegou depois/.test(v)));
});

test("e-mail que falhou é reenviado na próxima execução", async () => {
  presente("abc", 1);
  pagamento({ client_reference_id: "abc" });
  falharEmail = true;
  const r = await rodar();
  assert.equal(r.errosEmail, 1);
  assert.equal(docs.get("presentes/abc").notificado, false);
  falharEmail = false;
  await rodar(5);
  assert.equal(docs.get("presentes/abc").notificado, true);
  assert.equal(emails.length, 1);
});
