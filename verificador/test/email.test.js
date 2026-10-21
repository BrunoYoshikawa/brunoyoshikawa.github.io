const test = require("node:test");
const assert = require("node:assert");
const { montarEmail, esc } = require("../email");

const ts = { toDate: () => new Date("2026-11-01T18:00:00Z") };
const base = { presente: "Cachorrinho", valorSugerido: 4000, nome: "Ana", mensagem: "Parabéns!", criadoEm: ts };

test("pago: assunto com presente, valor pago e nome do site", () => {
  const { subject, linhas } = montarEmail({ ...base, status: "pago", valorPago: 4500, pagador: "ANA SILVA", pagoEm: ts }, 30);
  assert.match(subject, /^✅ Presente pago: Cachorrinho — R\$\s4\.500,00 — Ana$/);
  assert.ok(linhas.some(([k, v]) => k === "Nome no pagamento" && v === "ANA SILVA"));
  assert.ok(!linhas.some(([k]) => k === ""), "sem observação de pagamento atrasado");
});

test("pago depois do aviso de não pago traz observação", () => {
  const { linhas } = montarEmail({ ...base, status: "pago", valorPago: 4000, pagoAposAviso: true }, 30);
  assert.ok(linhas.some(([k, v]) => k === "" && /não pago/.test(v)));
});

test("pago sem registro no site usa o nome do pagador", () => {
  const { subject } = montarEmail({ status: "pago", semRegistro: true, valorPago: 100, pagador: "João" }, 30);
  assert.match(subject, /sem mensagem no site .* João$/);
});

test("não pago cita o prazo", () => {
  const { subject, linhas } = montarEmail({ ...base, nome: "", status: "nao_pago" }, 30);
  assert.equal(subject, "⚠️ Presente não pago: Cachorrinho — Anônimo");
  assert.ok(linhas.some(([, v]) => /30 minutos/.test(v)));
});

test("escapa HTML", () => {
  assert.equal(esc('<b>"x" & y</b>'), "&lt;b&gt;&quot;x&quot; &amp; y&lt;/b&gt;");
});
