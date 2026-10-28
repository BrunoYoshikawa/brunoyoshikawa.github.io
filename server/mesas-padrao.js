// Mesas padrão do mapa (admin-mesas.html), usadas até existir uma configuração salva no Firestore.
// x / y: centro da mesa em % da imagem do layout (recorte só do salão da festa, ~2000 × 1448 px).
// Se a imagem enviada for outra, ajuste as posições em "Editar mesas" no próprio mapa.
// marcada: true = só quem está na lista senta (padrinhos e família); false = mesa livre da região do grupo.
// Os nomes dos convidados ficam só no Firestore (campo "mesa" de cada convidado), nunca neste arquivo.
export const SETORES = {
  padrinhos: { nome: "Padrinhos e amigos com lugar marcado", cor: "#7d3c98" },
  amigos: { nome: "Amigos (mesas livres)", cor: "#2f6fa1" },
  spider: { nome: "Família do Spider", cor: "#d9822b" },
  elizabete: { nome: "Família da Elizabete", cor: "#3f8f5a" },
};

const mesa = (id, x, y, tipo, setor, grupo, marcada) => ({ id, x, y, tipo, setor, grupo, marcada });

// Numeração: fileira de cima da direita para a esquerda (M1–M5), comunitárias (M6 em cima, M7 embaixo),
// fileira de baixo da esquerda para a direita (M8–M14).
export const DEFAULT_MESAS = [
  mesa("M1", 93.7, 21.1, "redonda", "elizabete", "Família da Elizabete — avó e tias", true),
  mesa("M2", 82.4, 29.4, "redonda", "elizabete", "Família da Elizabete — primos", true),
  mesa("M3", 68.7, 23.5, "redonda", "padrinhos", "Padrinhos + primos do Spider", true),
  mesa("M4", 57.1, 15.4, "redonda", "spider", "Família do Spider", true),
  mesa("M5", 46.3, 24.8, "redonda", "padrinhos", "Padrinhos Baja e USP", true),
  mesa("M6", 58.5, 35.2, "comunitaria", "amigos", "Tractian", false),
  mesa("M7", 58.8, 52.3, "comunitaria", "amigos", "Amigos Passos + Mckinsey + Baja", false),
  mesa("M8", 29.8, 81.3, "redonda", "padrinhos", "Tractian — lugar marcado", true),
  mesa("M9", 46.3, 64.5, "redonda", "amigos", "USP + Amigos TC", false),
  mesa("M10", 57.4, 72.7, "redonda", "amigos", "Columbia", false),
  mesa("M11", 68.9, 67.2, "redonda", "elizabete", "Família da Elizabete", true),
  mesa("M12", 77.3, 82.9, "redonda", "elizabete", "Família da Elizabete", true),
  mesa("M13", 82.6, 64.9, "redonda", "elizabete", "Família da Elizabete — primos", true),
  mesa("M14", 92.6, 78.2, "redonda", "elizabete", "Família da Elizabete", true),
];

// Numeração antiga -> nova (out/2026). Usada uma única vez para converter o que já estava salvo.
export const NUMERACAO = 2;
export const RENUMERAR_V1 = { M5: "M1", M4: "M2", M3: "M3", M2: "M4", M1: "M5", M13: "M6", M14: "M7",
  M6: "M8", M7: "M9", M8: "M10", M9: "M11", M10: "M12", M11: "M13", M12: "M14" };

// "M6 · Tractian (região)" — texto usado nos selects e na exportação
export const mesaLabel = (m) => (m ? `${m.id} · ${m.grupo}${m.marcada ? "" : " (região)"}` : "");
