// Verificador dos presentes pagos no cartão. Roda no GitHub Actions a cada ~5 min
// (.github/workflows/verificar-presentes.yml), sem precisar do plano Blaze do Firebase.
//
// Fluxo:
//  1. presentes.html grava presentes/{id} com status "aguardando" e redireciona para o
//     link do Stripe com ?client_reference_id={id}.
//  2. Este script lê no Stripe os eventos de pagamento concluído desde a última execução
//     e marca o presente correspondente como "pago".
//  3. "aguardando" há mais de PRAZO_MINUTOS -> "nao_pago". Se o pagamento chegar depois,
//     o passo 2 muda para "pago" e avisa de novo.
//  4. Envia os e-mails pendentes. Os e-mails vão só para NOTIFICAR (nunca para o convidado).
const { montarEmail, esc } = require("./email");

// ====== Configuração ======
const NOTIFICAR = ["bruno.diego.yoshikawa@gmail.com"];
// onboarding@resend.dev só entrega para o e-mail dono da conta do Resend.
// Para usar outro remetente (ex.: site@brunoelizabete.com), verifique o domínio no Resend.
const REMETENTE = "Site do Casamento <onboarding@resend.dev>";
const PRAZO_MINUTOS = 30;
const JANELA_INICIAL_DIAS = 7; // na primeira execução, busca pagamentos dos últimos 7 dias
// async_payment_succeeded: formas de pagamento que confirmam depois (ex.: boleto)
const EVENTOS = ["checkout.session.completed", "checkout.session.async_payment_succeeded"];

// ====== Execução ======
// db: Firestore (Admin SDK); stripe(path, params): GET na API do Stripe; enviarEmail({ subject, text, html })
async function executar({ db, stripe, enviarEmail, agora = Date.now() }) {
  const presentes = db.collection("presentes");
  const cfgRef = db.collection("config").doc("verificador");
  const resumo = { eventos: 0, pagos: 0, naoPagos: 0, emails: 0, errosEmail: 0 };

  // 1. Pagamentos concluídos desde a última execução
  const cursor = (await cfgRef.get()).get("cursorEventos") ?? Math.floor(agora / 1000) - JANELA_INICIAL_DIAS * 86400;
  const eventos = await listarEventos(stripe, cursor);
  for (const ev of eventos) {
    const session = ev.data.object;
    if (session.payment_status !== "paid") continue;
    if (await registrarPagamento(db, presentes, session, ev.created)) resumo.pagos++;
  }
  resumo.eventos = eventos.length;
  // Só avança o cursor depois de registrar tudo (se algo falhar, a próxima execução repete)
  if (eventos.length) await cfgRef.set({ cursorEventos: Math.max(...eventos.map((e) => e.created)) }, { merge: true });

  // 2. Aguardando há mais que o prazo -> não pago
  const limite = agora - PRAZO_MINUTOS * 60 * 1000;
  const aguardando = await presentes.where("status", "==", "aguardando").get();
  for (const doc of aguardando.docs) {
    if (!(doc.get("criadoEm")?.toMillis() < limite)) continue;
    const mudou = await db.runTransaction(async (tx) => {
      const snap = await tx.get(doc.ref);
      if (snap.get("status") !== "aguardando") return false;
      tx.update(doc.ref, { status: "nao_pago", naoPagoEm: new Date(agora), notificado: false });
      return true;
    });
    if (mudou) resumo.naoPagos++;
  }

  // 3. E-mails pendentes (inclui os que falharam em execuções anteriores)
  const pendentes = await presentes.where("notificado", "==", false).get();
  for (const doc of pendentes.docs) {
    try {
      await enviarEmail(montarEmail(doc.data(), PRAZO_MINUTOS));
      await doc.ref.update({ notificado: true });
      resumo.emails++;
    } catch (err) {
      resumo.errosEmail++;
      console.error(`Erro ao enviar e-mail de presentes/${doc.id}: ${err.message}`);
    }
  }
  return resumo;
}

// Eventos do Stripe a partir de `desde` (segundos), do mais antigo para o mais novo
async function listarEventos(stripe, desde) {
  const eventos = [];
  let startingAfter;
  do {
    const page = await stripe("events", {
      "types[]": EVENTOS, "created[gte]": desde, limit: 100, ...(startingAfter && { starting_after: startingAfter }),
    });
    eventos.push(...page.data);
    startingAfter = page.has_more ? page.data.at(-1).id : null;
  } while (startingAfter);
  return eventos.sort((a, b) => a.created - b.created);
}

// Marca o presente como pago. Sem registro no site (link aberto direto), cria um.
// Retorna true se mudou algo (false = já estava pago, evento repetido).
async function registrarPagamento(db, presentes, session, pagoEmSegundos) {
  const pagamento = {
    status: "pago",
    valorPago: (session.amount_total || 0) / 100,
    moeda: String(session.currency || "brl").toUpperCase(),
    pagador: session.customer_details?.name || "",
    emailPagador: session.customer_details?.email || "",
    stripeSessionId: session.id,
    linkPagamentoId: session.payment_link || "",
    pagoEm: new Date(pagoEmSegundos * 1000),
    notificado: false,
  };
  const refId = String(session.client_reference_id || "");
  const ref = /^[A-Za-z0-9]{1,100}$/.test(refId) ? presentes.doc(refId) : presentes.doc(`stripe_${session.id}`);

  return db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    if (snap.get("status") === "pago") return false;
    if (snap.exists) {
      tx.update(ref, { ...pagamento, pagoAposAviso: snap.get("status") === "nao_pago" });
    } else {
      tx.set(ref, { ...pagamento, presente: "", semRegistro: true, criadoEm: pagamento.pagoEm });
    }
    return true;
  });
}

// ====== Clientes reais (Stripe e Resend via fetch) ======
function criarStripe(chave) {
  return async (path, params = {}) => {
    const url = new URL(`https://api.stripe.com/v1/${path}`);
    Object.entries(params).forEach(([k, v]) => [].concat(v).forEach((x) => url.searchParams.append(k, String(x))));
    const res = await fetch(url, { headers: { Authorization: `Bearer ${chave}` } });
    if (!res.ok) throw new Error(`Stripe ${res.status}: ${await res.text()}`);
    return res.json();
  };
}

function criarEnviarEmail(chave) {
  return async ({ subject, linhas }) => {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${chave}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: REMETENTE,
        to: NOTIFICAR,
        subject,
        text: linhas.map(([k, v]) => (k ? `${k}: ${v}` : v)).join("\n"),
        html: `<table style="font-family:sans-serif;font-size:14px">${linhas.map(([k, v]) => (k
          ? `<tr><td style="color:#666;padding:4px 12px 4px 0">${esc(k)}</td><td><b>${esc(v)}</b></td></tr>`
          : `<tr><td colspan="2" style="padding:12px 0 4px">${esc(v)}</td></tr>`)).join("")}</table>`,
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  };
}

// ====== Execução pelo GitHub Actions ======
// Variáveis (secrets do repositório): STRIPE_API_KEY, FIREBASE_SERVICE_ACCOUNT (JSON), RESEND_API_KEY
async function main() {
  const faltando = ["STRIPE_API_KEY", "FIREBASE_SERVICE_ACCOUNT", "RESEND_API_KEY"].filter((k) => !process.env[k]);
  if (faltando.length) throw new Error(`Faltam as variáveis: ${faltando.join(", ")}`);

  const { initializeApp, cert } = require("firebase-admin/app");
  const { getFirestore } = require("firebase-admin/firestore");
  initializeApp({ credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)) });

  const resumo = await executar({
    db: getFirestore(),
    stripe: criarStripe(process.env.STRIPE_API_KEY),
    enviarEmail: criarEnviarEmail(process.env.RESEND_API_KEY),
  });
  console.log("Resumo:", JSON.stringify(resumo));
  if (resumo.errosEmail) process.exitCode = 1; // o GitHub avisa quando o workflow falha
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}

module.exports = { executar, PRAZO_MINUTOS, NOTIFICAR };
