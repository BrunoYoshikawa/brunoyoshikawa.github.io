// ====== Configuração rápida (edite estes valores) ======
const WEDDING_CONFIG = {
  coupleNames: "Bruno e Elizabete",
  date: "01 de Novembro de 2026",
  time: "15h30",
  venueName: "Fazenda Fagundes",
  venueAddress: "Rodovia Arão Sahm, S/N | Mairiporã - São Paulo",
  mapsQuery: "Fazenda Fagundes, Rodovia Arão Sahm, S/N, Mairiporã - São Paulo",
  rsvpEmail: "seuemail@example.com", // Altere para o e-mail que receberá os RSVPs
};

// ====== Utilidades ======
function encodeRFC3986(str) {
  return encodeURIComponent(str)
    .replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}

function select(el) {
  return document.querySelector(el);
}

// ====== Popular conteúdo com base na configuração ======
function populateContent() {
  const {
    coupleNames, date, time, venueName, venueAddress, mapsQuery,
  } = WEDDING_CONFIG;

  const namesEl = select(".couple-names");
  const namesFooterEl = select(".couple-names-footer");
  const dateEl = select(".wedding-date");
  const timeEl = select(".wedding-time");
  const locationEl = select(".wedding-location");

  if (namesEl) namesEl.textContent = coupleNames;
  if (namesFooterEl) namesFooterEl.textContent = coupleNames;
  if (dateEl) dateEl.textContent = date;
  if (timeEl) timeEl.textContent = time;
  if (locationEl) locationEl.textContent = venueName;

  const venueNameEl = select("#venue-name");
  const venueAddressEl = select("#venue-address");
  if (venueNameEl) venueNameEl.textContent = venueName;
  if (venueAddressEl) venueAddressEl.textContent = venueAddress;

  // Atualiza título
  document.title = `Nosso Casamento – ${coupleNames}`;

  // Atualiza mapa
  const mapsBase = "https://www.google.com/maps";
  const q = encodeRFC3986(mapsQuery || venueName || venueAddress);
  const mapsLink = `${mapsBase}/search/?api=1&query=${q}`;
  const embedSrc = `https://www.google.com/maps?q=${q}&output=embed`;

  const mapsA = select("#google-maps-link");
  const mapsIframe = select("#google-maps-iframe");
  if (mapsA) mapsA.href = mapsLink;
  if (mapsIframe) mapsIframe.src = embedSrc;

  // Ano no rodapé
  const yearEl = select("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

// ====== Navegação suave e estado do cabeçalho ======
function setupSmoothScroll() {
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.closest("a[href^='#']")) {
      const a = target.closest("a");
      const href = a.getAttribute("href");
      if (href && href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          history.pushState(null, "", href);
        }
      }
    }
  });
}

function setupHeaderScrollState() {
  const header = select(".site-header");
  if (!header) return;
  const setState = () => {
    if (window.scrollY > 8) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };
  setState();
  window.addEventListener("scroll", setState, { passive: true });
}

// ====== RSVP por e-mail ======
function setupRSVPForm() {
  const form = select("#rsvp-form");
  const feedback = select("#rsvp-feedback");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const presenca = (data.get("presenca") || "").toString().trim();
    const acompanhantes = (data.get("acompanhantes") || "0").toString().trim();
    const nome = (data.get("nome") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const telefone = (data.get("telefone") || "").toString().trim();
    const mensagem = (data.get("mensagem") || "").toString().trim();

    // Validação simples
    if (!presenca || !nome || !email) {
      if (feedback) {
        feedback.textContent = "Por favor, preencha os campos obrigatórios.";
      }
      return;
    }

    const subject = `RSVP - ${WEDDING_CONFIG.coupleNames} - ${presenca}`;
    const lines = [
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      telefone ? `Telefone: ${telefone}` : null,
      `Presença: ${presenca}`,
      `Acompanhantes: ${acompanhantes || "0"}`,
      mensagem ? `Mensagem: ${mensagem}` : null,
    ].filter(Boolean);
    const body = lines.join("\n");

    const mailto = `mailto:${encodeRFC3986(WEDDING_CONFIG.rsvpEmail)}?subject=${encodeRFC3986(subject)}&body=${encodeRFC3986(body)}`;

    // Abre o cliente de e-mail
    window.location.href = mailto;
    if (feedback) {
      feedback.textContent = "Abrimos seu aplicativo de e-mail para enviar a confirmação.";
    }
    form.reset();
  });
}

// ====== Init ======
document.addEventListener("DOMContentLoaded", () => {
  populateContent();
  setupSmoothScroll();
  setupHeaderScrollState();
  setupRSVPForm();
});


