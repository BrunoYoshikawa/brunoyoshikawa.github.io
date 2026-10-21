// Monta assunto e linhas (rótulo, valor) dos e-mails de presentes. Linha com rótulo vazio = observação.
function montarEmail(p, prazoMinutos) {
  const brl = (v) => Number(v || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const quando = (ts) => {
    const d = ts?.toDate ? ts.toDate() : ts instanceof Date ? ts : null; // Timestamp do Firestore ou Date
    return d ? d.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }) : "-";
  };
  const quem = p.nome || p.pagador || "Anônimo";

  if (p.status === "pago" && p.semRegistro) {
    return {
      subject: `✅ Pagamento no Stripe sem mensagem no site — ${brl(p.valorPago)} — ${quem}`,
      linhas: [
        ["Valor pago", brl(p.valorPago)],
        ["Nome no pagamento", p.pagador || "-"],
        ["E-mail do pagador", p.emailPagador || "-"],
        ["Link de pagamento", p.linkPagamentoId || "-"],
        ["Pago em", quando(p.pagoEm)],
        ["", "A pessoa pagou pelo link do Stripe sem passar pelo formulário do site."],
      ],
    };
  }
  if (p.status === "pago") {
    return {
      subject: `✅ Presente pago: ${p.presente} — ${brl(p.valorPago)} — ${quem}`,
      linhas: [
        ["Presente", p.presente],
        ["Valor pago", brl(p.valorPago)],
        ["Valor sugerido", brl(p.valorSugerido)],
        ["Nome no site", p.nome || "-"],
        ["Nome no pagamento", p.pagador || "-"],
        ["E-mail do pagador", p.emailPagador || "-"],
        ["Mensagem", p.mensagem || "(sem mensagem)"],
        ["Pago em", quando(p.pagoEm)],
        ...(p.pagoAposAviso ? [["", "Obs.: este presente tinha sido avisado como não pago; o pagamento chegou depois."]] : []),
      ],
    };
  }
  return {
    subject: `⚠️ Presente não pago: ${p.presente} — ${quem}`,
    linhas: [
      ["Presente", p.presente],
      ["Valor sugerido", brl(p.valorSugerido)],
      ["Nome no site", p.nome || "-"],
      ["Mensagem", p.mensagem || "(sem mensagem)"],
      ["Abriu o pagamento em", quando(p.criadoEm)],
      ["", `O Stripe não confirmou pagamento em ${prazoMinutos} minutos. Se a pessoa pagar depois, chega outro e-mail.`],
    ],
  };
}

const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

module.exports = { montarEmail, esc };
