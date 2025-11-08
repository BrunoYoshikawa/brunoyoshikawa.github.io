// ====== Configuração rápida (edite estes valores) ======
const WEDDING_CONFIG = {
  coupleNames: "Bruno & Elizabete",
  date: "01 de Novembro de 2026",
  time: "15h30",
  venueName: "Fazenda Fagundes",
  venueAddress: "Rodovia Arão Sahm, S/N | Mairiporã - São Paulo",
  mapsQuery: "Fazenda Fagundes, Rodovia Arão Sahm, S/N, Mairiporã - São Paulo",
  rsvpEmail: "seuemail@example.com", // Altere para o e-mail que receberá os RSVPs
};

// ====== Traduções (PT/EN) ======
const I18N = {
  pt: {
    titleBase: "Nosso Casamento",
    "nav.casamento": "O Casamento",
    "nav.local": "Local",
    "nav.itinerario": "Itinerário",
    "nav.confirmar": "Confirmar presença",
    "nav.presentes": "Presentes",
    "hero.subtitle": "Estamos muito felizes em compartilhar este momento com você. Abaixo você encontra todas as informações sobre o grande dia!",
    "hero.confirmar": "Confirmar presença",
    "hero.verLocal": "Ver local",
    "section.sobre": "Sobre o casamento",
    "section.local": "Local",
    "section.itinerario": "Itinerário",
    "section.rsvp": "Confirmar presença",
    "about.text": "Será uma celebração intimista e cheia de amor, com cerimônia seguida de recepção. Prepare-se para uma noite especial com família e amigos, boa música e momentos inesquecíveis.",
    "local.comoChegar.title": "Como chegar",
    "local.comoChegar.text": "Recomendamos transporte por aplicativo ou taxi. Há pontos de referência próximos e fácil acesso.",
    "local.estacionamento.title": "Estacionamento",
    "local.estacionamento.text": "Informe se há valet, estacionamento próprio ou opções na rua.",
    "local.hoteis.title": "Hotéis próximos",
    "local.hoteis.h1": "Hotel 1 — a X min do local",
    "local.hoteis.h2": "Hotel 2 — a Y min do local",
    "local.hoteis.h3": "Hotel 3 — a Z min do local",
    "local.mapa.abrir": "Abrir no Google Maps",
    "itinerario.1.title": "Chegada dos convidados",
    "itinerario.1.text": "Recepção e acomodação dos convidados.",
    "itinerario.2.title": "Cerimônia",
    "itinerario.2.text": "Início da cerimônia no espaço principal.",
    "itinerario.3.title": "Coquetel",
    "itinerario.3.text": "Brinde e fotos com os noivos.",
    "itinerario.4.title": "Jantar",
    "itinerario.4.text": "Serviço de jantar aos convidados.",
    "itinerario.5.title": "Festa",
    "itinerario.5.text": "Vamos celebrar juntos com música e dança!",
    "rsvp.intro": "Por favor, confirme sua presença para nos ajudar na organização. Obrigado!",
    "presentes.title": "Lista de presentes",
    "presentes.intro": "Se desejar nos presentear, você pode escolher uma das opções abaixo. Obrigado pelo carinho!",
    "presentes.voltar": "Voltar para a página inicial",
    "form.presenca.label": "Presença",
    "form.presenca.select": "Selecione uma opção",
    "form.presenca.confirmo": "Confirmo presença",
    "form.presenca.nao": "Não poderei ir",
    "form.acompanhantes.label": "Número de acompanhantes",
    "form.nome.label": "Nome completo",
    "form.nome.placeholder": "Seu nome",
    "form.email.label": "E-mail",
    "form.email.placeholder": "voce@email.com",
    "form.telefone.label": "Telefone (opcional)",
    "form.telefone.placeholder": "(11) 99999-9999",
    "form.mensagem.label": "Mensagem (opcional)",
    "form.mensagem.placeholder": "Escreva uma mensagem para os noivos",
    "form.obrigatorio": "Obrigatório",
    "form.enviar": "Enviar confirmação",
    "form.feedback.required": "Por favor, preencha os campos obrigatórios.",
    "form.feedback.sent": "Abrimos seu aplicativo de e-mail para enviar a confirmação.",
    "footer.comCarinho": "Com carinho,",
    "footer.direitos": "Todos os direitos reservados",
  },
  en: {
    titleBase: "Our Wedding",
    "nav.casamento": "The Wedding",
    "nav.local": "Venue",
    "nav.itinerario": "Itinerary",
    "nav.confirmar": "RSVP",
    "nav.presentes": "Gifts",
    "hero.subtitle": "We are very happy to share this moment with you. Below you will find all the information about the big day!",
    "hero.confirmar": "RSVP",
    "hero.verLocal": "See venue",
    "section.sobre": "About the wedding",
    "section.local": "Venue",
    "section.itinerario": "Itinerary",
    "section.rsvp": "RSVP",
    "about.text": "It will be an intimate and loving celebration with a ceremony followed by a reception. Get ready for a special evening with family and friends, good music, and unforgettable moments.",
    "local.comoChegar.title": "How to get there",
    "local.comoChegar.text": "We recommend using ride-hailing or taxi. There are nearby landmarks and easy access.",
    "local.estacionamento.title": "Parking",
    "local.estacionamento.text": "Let us know if there is valet, on-site parking, or street options.",
    "local.hoteis.title": "Nearby hotels",
    "local.hoteis.h1": "Hotel 1 — X min from venue",
    "local.hoteis.h2": "Hotel 2 — Y min from venue",
    "local.hoteis.h3": "Hotel 3 — Z min from venue",
    "local.mapa.abrir": "Open in Google Maps",
    "itinerario.1.title": "Guests arrival",
    "itinerario.1.text": "Reception and seating of guests.",
    "itinerario.2.title": "Ceremony",
    "itinerario.2.text": "Start of the ceremony in the main hall.",
    "itinerario.3.title": "Cocktail",
    "itinerario.3.text": "Toast and photos with the couple.",
    "itinerario.4.title": "Dinner",
    "itinerario.4.text": "Dinner service for guests.",
    "itinerario.5.title": "Party",
    "itinerario.5.text": "Let’s celebrate together with music and dancing!",
    "rsvp.intro": "Please confirm your attendance to help us with organization. Thank you!",
    "presentes.title": "Gift list",
    "presentes.intro": "If you would like to give us a gift, you can choose one of the options below. Thank you for your love!",
    "presentes.voltar": "Back to home page",
    "form.presenca.label": "Attendance",
    "form.presenca.select": "Select an option",
    "form.presenca.confirmo": "I will attend",
    "form.presenca.nao": "I cannot attend",
    "form.acompanhantes.label": "Number of guests",
    "form.nome.label": "Full name",
    "form.nome.placeholder": "Your name",
    "form.email.label": "Email",
    "form.email.placeholder": "you@email.com",
    "form.telefone.label": "Phone (optional)",
    "form.telefone.placeholder": "(555) 555-5555",
    "form.mensagem.label": "Message (optional)",
    "form.mensagem.placeholder": "Write a message to the couple",
    "form.obrigatorio": "Required",
    "form.enviar": "Send RSVP",
    "form.feedback.required": "Please fill out the required fields.",
    "form.feedback.sent": "We opened your email app to send the RSVP.",
    "footer.comCarinho": "With love,",
    "footer.direitos": "All rights reserved",
  },
};

let currentLang = "pt";

function getLanguage() {
  const stored = localStorage.getItem("lang");
  if (stored && (stored === "pt" || stored === "en")) return stored;
  return "pt";
}

function setLanguage(lang) {
  currentLang = lang === "en" ? "en" : "pt";
  localStorage.setItem("lang", currentLang);
  applyI18N();
  populateContent();
  const selectEl = select("#lang-switcher");
  if (selectEl) selectEl.value = currentLang;
}

function applyI18N() {
  const dict = I18N[currentLang] || I18N.pt;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });
}

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
  const dict = I18N[currentLang] || I18N.pt;
  document.title = `${dict.titleBase} – ${coupleNames}`;

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
        const dict = I18N[currentLang] || I18N.pt;
        feedback.textContent = dict["form.feedback.required"];
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
      const dict = I18N[currentLang] || I18N.pt;
      feedback.textContent = dict["form.feedback.sent"];
    }
    form.reset();
  });
}

// ====== Init ======
document.addEventListener("DOMContentLoaded", () => {
  currentLang = getLanguage();
  applyI18N();
  populateContent();
  setupSmoothScroll();
  setupHeaderScrollState();
  setupRSVPForm();
  setupLanguageSwitcherUI();
});

// ====== Language switcher UI (flags dropdown) ======
function setupLanguageSwitcherUI() {
  const control = document.querySelector(".lang-control");
  const button = document.querySelector(".lang-button");
  const menu = document.querySelector(".lang-menu");
  const currentFlag = document.querySelector("#current-flag");
  if (!control || !button || !menu || !currentFlag) return;

  const render = () => {
    const isPT = currentLang === "pt";
    currentFlag.classList.toggle("flag-pt", isPT);
    currentFlag.classList.toggle("flag-en", !isPT);
    menu.querySelectorAll("[role='option']").forEach((opt) => {
      const lang = opt.getAttribute("data-lang");
      const selected = lang === currentLang;
      opt.setAttribute("aria-selected", selected ? "true" : "false");
    });
  };

  const open = () => {
    button.setAttribute("aria-expanded", "true");
    control.classList.add("is-open");
  };
  const close = () => {
    button.setAttribute("aria-expanded", "false");
    control.classList.remove("is-open");
  };
  const toggle = () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    if (expanded) close(); else open();
  };

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });
  menu.addEventListener("click", (e) => {
    const li = e.target.closest("[role='option']");
    if (!li) return;
    const lang = li.getAttribute("data-lang");
    setLanguage(lang);
    render();
    close();
  });
  document.addEventListener("click", (e) => {
    if (!control.contains(e.target)) {
      close();
    }
  });

  render();
}


