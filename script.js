// ====== Configuração rápida (edite estes valores) ======
const WEDDING_CONFIG = {
  coupleNames: "Bruno & Elizabete",
  date: "01 de Novembro de 2026",
  time: "15h30",
  venueName: "Fazenda Fagundes",
  venueAddress: "Rodovia Arão Sahm, S/N | Mairiporã - São Paulo",
  mapsQuery: "Fazenda Fagundes, Rodovia Arão Sahm, S/N, Mairiporã - São Paulo",
  rsvpEmail: "bruno.diego.yoshikawa@gmail.com", // Altere para o e-mail que receberá os RSVPs (fallback)
  pixKey: "bruno.diego.yoshikawa@gmail.com",
  // Chave do Web3Forms (https://web3forms.com) para receber e-mails de RSVP e mensagens dos presentes.
  // É pública por natureza (fica no navegador); só permite enviar e-mail para o dono da chave.
  web3formsKey: "00f66dc8-f6f3-4bfd-aa57-e68d49f28a4c",
  pixReceiverName: "Bruno Diego Yoshikawa",
  pixReceiverCity: "SAO PAULO",
};
const I18N = {
  pt: {
    titleBase: "Nosso Casamento",
    "nav.casamento": "O Casamento",
    "nav.local": "Local",
    "nav.itinerario": "Itinerário",
    "wedding-weekday": "Domingo",
    "nav.confirmar": "Confirmar presença",
    "nav.presentes": "Presentes",
    "hero.subtitle": "Estamos muito felizes em compartilhar este momento com você. Abaixo você encontra todas as informações sobre o grande dia!",
    "hero.confirmar": "Confirmar presença",
    "hero.verLocal": "Ver local",
    "section.sobre": "Sobre o casamento",
    "section.local": "Local",
    "section.itinerario": "Itinerário",
    "section.rsvp": "Confirmar presença",
    "section.traje": "Como devo me vestir?",
    "about.text": "Será uma celebração intimista e cheia de amor, com cerimônia seguida de recepção. Prepare-se para uma noite especial com família e amigos, boa música e momentos inesquecíveis.",
    "traje.text": "Traje social completo, confortável para cerimônia no campo. Qualquer dúvida chamar a Elizabete que ela te explicará melhor.\nObs: A cerimônia será ao ar livre, na grama (salto fino pode afundar!), e a festa acontece em piso firme.",
    "local.comoChegar.title": "Como chegar",
    "local.comoChegar.text": "Recomendamos transporte por aplicativo ou taxi. Há pontos de referência próximos e fácil acesso.",
    "local.estacionamento.title": "Estacionamento",
    "local.estacionamento.text": "Informe se há valet, estacionamento próprio ou opções na rua.",
    "local.hoteis.title": "Hotéis próximos",
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
    "gifts.present": "Presentear",
    "gifts.kind": "Contribuição em dinheiro",
    "gifts.btn.pix": "Pix",
    "gifts.btn.card": "Cartão",
    "gifts.card.title": "Presente via cartão",
    "gifts.card.continue": "Continuar para o pagamento →",
    "gifts.msg.title": "💌 Deixe seu nome e uma mensagem",
    "gifts.msg.name": "Seu nome",
    "gifts.msg.text": "Uma mensagem para os noivos (opcional)",
    "gifts.msg.send": "Enviar mensagem",
    "gifts.msg.sending": "Enviando...",
    "gifts.msg.sent": "Mensagem enviada! Obrigado 💛",
    "gifts.msg.empty": "Escreva seu nome ou uma mensagem.",
    "gifts.msg.error": "Não foi possível enviar agora. Tente novamente.",
    "gifts.pix.title": "Presente via Pix",
    "gifts.pix.copy": "Copiar código Pix",
    "gifts.pix.copied": "Código copiado!",
    "gifts.pix.step1": "Abra o app do seu banco e escolha pagar com Pix.",
    "gifts.pix.step2": "Escaneie o QR Code ou cole o código copiado (Pix copia e cola).",
    "gifts.pix.step3": "Confira o valor e o favorecido antes de confirmar.",
    "gifts.pix.receiver": "Favorecido",
    "gifts.pix.key": "Chave Pix (e-mail)",
    "gifts.pix.showCode": "Ver código e baixar QR Code",
    "gifts.pix.download": "Baixar QR Code",
    "gifts.pix.thanks": "Obrigado pelo carinho! 💛",
    "gifts.panela.title": "Jogo de panela Le Creuset",
    "gifts.panela.desc": "Aumentar o nível da cozinha em casa.",
    "gifts.cachorro.title": "Cachorrinho",
    "gifts.cachorro.desc": "Elizabete sempre falou que gostaria de um doguinho",
    "gifts.lego.title": "Kit LEGO para decoração",
    "gifts.lego.desc": "Adicionar à coleção da Elizabete na sala de estar",
    "gifts.oculos.title": "Óculos de corrida",
    "gifts.oculos.desc": "Importante para baixar o pace",
    "gifts.viagem.title": "Viagem US — BR",
    "gifts.viagem.desc": "Frequente nesses últimos tempos",
    "gifts.faca.title": "Faca de chef",
    "gifts.faca.desc": "Necessidades básicas da cozinha",
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
    "form.feedback.success": "Recebemos sua confirmação. Obrigado!",
    "form.feedback.error": "Não foi possível enviar agora. Tente novamente em instantes.",
    "form.feedback.duplicate": "Já recebemos uma confirmação com este e-mail. Para alterar, fale com os noivos.",
    "form.feedback.missingConfig": "Configuração de envio ausente. Avise os noivos, por favor.",
    "footer.comCarinho": "Com carinho,",
    "footer.direitos": "Todos os direitos reservados",
  },
  en: {
    titleBase: "Our Wedding",
    "nav.casamento": "The Wedding",
    "nav.local": "Venue",
    "nav.itinerario": "Itinerary",
    "wedding-weekday": "Sunday",
    "nav.confirmar": "RSVP",
    "nav.presentes": "Gifts",
    "hero.subtitle": "We are very happy to share this moment with you. Below you will find all the information about the big day!",
    "hero.confirmar": "RSVP",
    "hero.verLocal": "See venue",
    "section.sobre": "About the wedding",
    "section.local": "Venue",
    "section.itinerario": "Itinerary",
    "section.rsvp": "RSVP",
    "section.traje": "What should I wear?",
    "about.text": "It will be an intimate and loving celebration with a ceremony followed by a reception. Get ready for a special evening with family and friends, good music, and unforgettable moments.",
    "traje.text": "Formal attire, comfortable for an outdoor countryside ceremony. If you have any questions, please contact Elizabete and she will explain.\nNote: The ceremony will be outdoors on grass (thin heels may sink!), and the party will be on solid flooring.",
    "local.comoChegar.title": "How to get there",
    "local.comoChegar.text": "We recommend using ride-hailing or taxi. There are nearby landmarks and easy access.",
    "local.estacionamento.title": "Parking",
    "local.estacionamento.text": "Let us know if there is valet, on-site parking, or street options.",
    "local.hoteis.title": "Nearby hotels",
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
    "gifts.present": "Gift this",
    "gifts.kind": "Monetary contribution",
    "gifts.btn.pix": "Pix",
    "gifts.btn.card": "Card",
    "gifts.card.title": "Gift via card",
    "gifts.card.continue": "Continue to payment →",
    "gifts.msg.title": "💌 Leave your name and a message",
    "gifts.msg.name": "Your name",
    "gifts.msg.text": "A message for the couple (optional)",
    "gifts.msg.send": "Send message",
    "gifts.msg.sending": "Sending...",
    "gifts.msg.sent": "Message sent! Thank you 💛",
    "gifts.msg.empty": "Please write your name or a message.",
    "gifts.msg.error": "We couldn't send it now. Please try again.",
    "gifts.pix.title": "Gift via Pix",
    "gifts.pix.copy": "Copy Pix code",
    "gifts.pix.copied": "Code copied!",
    "gifts.pix.step1": "Open your Brazilian bank app and choose to pay with Pix.",
    "gifts.pix.step2": "Scan the QR Code or paste the copied code (Pix copy and paste).",
    "gifts.pix.step3": "Check the amount and recipient before confirming.",
    "gifts.pix.receiver": "Recipient",
    "gifts.pix.key": "Pix key (e-mail)",
    "gifts.pix.showCode": "Show code and download QR Code",
    "gifts.pix.download": "Download QR Code",
    "gifts.pix.thanks": "Thank you for your love! 💛",
    "gifts.panela.title": "Le Creuset cookware set",
    "gifts.panela.desc": "Level up our kitchen at home.",
    "gifts.cachorro.title": "Puppy",
    "gifts.cachorro.desc": "Elizabete has always wanted a little dog",
    "gifts.lego.title": "LEGO set for decoration",
    "gifts.lego.desc": "Add to Elizabete's living room collection",
    "gifts.oculos.title": "Running sunglasses",
    "gifts.oculos.desc": "Important to improve pace",
    "gifts.viagem.title": "Trip US — BR",
    "gifts.viagem.desc": "Frequent in recent times",
    "gifts.faca.title": "Chef's knife",
    "gifts.faca.desc": "Basic kitchen needs",
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
    "form.feedback.success": "We received your RSVP. Thank you!",
    "form.feedback.error": "We couldn't send now. Please try again shortly.",
    "form.feedback.duplicate": "We already received an RSVP with this e-mail. To change it, please contact the couple.",
    "form.feedback.missingConfig": "Submission configuration missing. Please notify the couple.",
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

// ====== Helpers: Localize date/time ======
function toEnglishDate(ptDateStr) {
  if (!ptDateStr || typeof ptDateStr !== "string") return ptDateStr;
  const monthMap = {
    janeiro: "January",
    fevereiro: "February",
    março: "March",
    marco: "March",
    abril: "April",
    maio: "May",
    junho: "June",
    julho: "July",
    agosto: "August",
    setembro: "September",
    outubro: "October",
    novembro: "November",
    dezembro: "December",
  };
  const m = ptDateStr
    .toLowerCase()
    .match(/^\s*(\d{1,2})\s+de\s+([a-zçáéíóúâêôãõ]+)\s+de\s+(\d{4})\s*$/i);
  if (!m) return ptDateStr;
  const day = parseInt(m[1], 10);
  const monthPt = m[2].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const year = m[3];
  const monthEn = monthMap[monthPt] || m[2];
  return `${monthEn} ${day}, ${year}`;
}

function toEnglishTime(timeStr) {
  if (!timeStr || typeof timeStr !== "string") return timeStr;
  // Accept formats like "15h30", "15:30", "15h", "15"
  const m = timeStr.match(/^\s*(\d{1,2})(?:[:hH](\d{2}))?\s*$/);
  if (!m) return timeStr;
  let hours = parseInt(m[1], 10);
  const minutes = m[2] ? parseInt(m[2], 10) : 0;
  const suffix = hours >= 12 ? "PM" : "AM";
  if (hours === 0) hours = 12;
  else if (hours > 12) hours -= 12;
  const mm = String(minutes).padStart(2, "0");
  return `${hours}:${mm} ${suffix}`;
}

// ====== Weekday helpers (PT/EN) ======
function getWeekdayFromPtDate(ptDateStr) {
  if (!ptDateStr || typeof ptDateStr !== "string") return "";
  const months = {
    janeiro: 0, fevereiro: 1, março: 2, marco: 2, abril: 3, maio: 4, junho: 5,
    julho: 6, agosto: 7, setembro: 8, outubro: 9, novembro: 10, dezembro: 11,
  };
  const m = ptDateStr
    .toLowerCase()
    .match(/^\s*(\d{1,2})\s+de\s+([a-zçáéíóúâêôãõ]+)\s+de\s+(\d{4})\s*$/i);
  if (!m) return "";
  const day = parseInt(m[1], 10);
  const monthPt = m[2].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const year = parseInt(m[3], 10);
  const monthIdx = months[monthPt];
  if (monthIdx == null) return "";
  const d = new Date(year, monthIdx, day);
  const weekdaysPt = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const weekdaysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return { pt: weekdaysPt[d.getDay()], en: weekdaysEn[d.getDay()] };
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
  if (dateEl) dateEl.textContent = currentLang === "en" ? toEnglishDate(date) : date;
  // Exibe horário; em PT, normaliza "15h30" -> "15:30"
  if (timeEl) {
    if (currentLang === "en") timeEl.textContent = toEnglishTime(time);
    else timeEl.textContent = (time || "").toString().replace(/[hH]/, ":");
  }
  if (locationEl) locationEl.textContent = venueName;

  const venueNameEl = select("#venue-name");
  const venueAddressEl = select("#venue-address");
  if (venueNameEl) venueNameEl.textContent = venueName;
  if (venueAddressEl) venueAddressEl.textContent = venueAddress;

  // Atualiza título
  const dict = I18N[currentLang] || I18N.pt;
  document.title = `${dict.titleBase} – ${coupleNames}`;

  // Dia da semana (se existir no template)
  const weekdayEl = select(".wedding-weekday");
  if (weekdayEl) {
    const w = getWeekdayFromPtDate(WEDDING_CONFIG.date);
    if (w && typeof w === "object" && w.pt && w.en) {
      weekdayEl.textContent = currentLang === "en" ? w.en : w.pt;
    } else if (typeof w === "string" && w.length > 0) {
      weekdayEl.textContent = w;
    }
  }

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
    const acompanhantes = (data.get("acompanhantes") || "0").toString().trim();
    const nome = (data.get("nome") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const telefone = (data.get("telefone") || "").toString().trim();
    const mensagem = (data.get("mensagem") || "").toString().trim();

    // Validação simples
    if (!nome || !email) {
      if (feedback) {
        const dict = I18N[currentLang] || I18N.pt;
        feedback.textContent = dict["form.feedback.required"];
      }
      return;
    }

    const dict = I18N[currentLang] || I18N.pt;

    const payload = {
      lang: currentLang,
      nome,
      email,
      telefone,
      acompanhantes: acompanhantes || "0",
      mensagem,
    };

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    // Envia para o Firestore (server/firebase-db.js)
    import("./server/firebase-db.js")
      .then(({ dbService }) => dbService.submitRSVP(payload))
      .then(() => {
        notifyByEmail({ tipo: "rsvp", ...payload }).catch((err) => console.error("RSVP e-mail error:", err));
        if (feedback) feedback.textContent = dict["form.feedback.success"];
        form.reset();
      })
      .catch((err) => {
        console.error("RSVP error:", err);
        const key = err?.code === "permission-denied" ? "form.feedback.duplicate" : "form.feedback.error";
        if (feedback) feedback.textContent = dict[key];
      })
      .finally(() => {
        if (submitBtn) submitBtn.disabled = false;
      });
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
  setupGiftsPix();
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

// ====== Notificação por e-mail (Web3Forms) ======
function notifyByEmail(data) {
  const key = (WEDDING_CONFIG.web3formsKey || "").trim();
  if (!key) return Promise.reject(new Error("web3formsKey não configurada"));

  const brl = (v) => Number(v || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  let fields;
  if (data.tipo === "rsvp") {
    const acomp = parseInt(data.acompanhantes, 10) || 0;
    fields = {
      subject: `✅ RSVP: ${data.nome} (+${acomp})`,
      replyto: data.email,
      Nome: data.nome,
      "E-mail": data.email,
      Telefone: data.telefone || "-",
      Acompanhantes: acomp,
      "Total de pessoas": 1 + acomp,
      Mensagem: data.mensagem || "(sem mensagem)",
      Idioma: currentLang,
    };
  } else {
    fields = {
      subject: `🎁 Presente: ${data.presente} (${data.forma}) — ${data.nome || "Anônimo"}`,
      Nome: data.nome || "Anônimo",
      Presente: data.presente,
      Valor: brl(data.valor),
      "Forma de pagamento": data.forma,
      Mensagem: data.mensagem || "(sem mensagem)",
      Aviso: "O site não confirma o pagamento. Confira no app do banco (Pix) ou no Stripe (cartão).",
    };
  }

  return fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: key, from_name: "Site do Casamento", ...fields }),
  })
    .then((res) => res.json())
    .then((json) => {
      if (!json.success) throw new Error(json.message || "Falha no envio");
      return json;
    });
}

// ====== Presentes: Pix (QR Code + copia e cola) ou cartão, com mensagem ======
function setupGiftsPix() {
  const modal = select("#gift-modal");
  if (!modal) return; // só na página de presentes

  const content = modal.querySelector(".pix-modal");
  const qrImg = select("#pix-qr");
  const codeBox = select("#pix-code");
  const copyBtn = select("#pix-copy");
  const copyLabel = select("#pix-copy-label");
  const downloadLink = select("#pix-download");
  const form = select("#gift-message");
  const feedback = form.querySelector(".gift-message-feedback");
  const t = (key) => (I18N[currentLang] || I18N.pt)[key] || I18N.pt[key];
  let gift = null;

  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".gift-pix, .gift-card-pay");
    if (!btn) return;
    const card = btn.closest(".gift-card");
    const pixBtn = card?.querySelector(".gift-pix");
    const mode = btn.classList.contains("gift-pix") ? "pix" : "card";
    gift = {
      mode,
      name: card?.querySelector(".gift-title")?.textContent.trim() || "Presente",
      title: pixBtn?.dataset.title || "Presente", // sem acentos, para o Pix
      amount: Number(pixBtn?.dataset.amount || 0),
      cardUrl: card?.querySelector(".gift-card-pay")?.dataset.link,
    };

    content.dataset.mode = mode;
    // Mostra só os elementos do modo atual (Pix ou cartão)
    modal.querySelectorAll(".pix-only").forEach((el) => (el.hidden = mode !== "pix"));
    modal.querySelectorAll(".card-only").forEach((el) => (el.hidden = mode !== "card"));
    modal.querySelector(".pix-gift-name").textContent = gift.name;
    modal.querySelector(".pix-amount").textContent = gift.amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    form.reset();
    form.querySelectorAll("input, textarea, button").forEach((el) => (el.disabled = false));
    feedback.textContent = "";

    if (mode === "pix") {
      const { pixKey, pixReceiverName, pixReceiverCity } = WEDDING_CONFIG;
      const txid = "CASAMENTO" + Date.now().toString().slice(-8);
      const payload = generatePixPayload(pixKey, pixReceiverName, pixReceiverCity, gift.amount, gift.title, txid);
      select("#pix-key").textContent = pixKey;
      select("#pix-receiver").textContent = pixReceiverName;
      codeBox.value = payload;
      copyBtn.classList.remove("is-copied");
      copyLabel.textContent = t("gifts.pix.copy");
      modal.querySelector(".pix-more").open = false;
      qrImg.removeAttribute("src");
      if (window.QRCode && typeof QRCode.toDataURL === "function") {
        QRCode.toDataURL(payload, { width: 340, margin: 1 }).then((url) => {
          qrImg.src = url;
          downloadLink.href = url;
          downloadLink.download = `pix-${txid}.png`;
        }).catch(() => {});
      }
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  });

  // Envia nome + mensagem por e-mail. No cartão, segue para o Stripe em seguida.
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!gift) return;
    const data = new FormData(form);
    const nome = String(data.get("nome") || "").trim();
    const mensagem = String(data.get("mensagem") || "").trim();
    const isCard = gift.mode === "card";

    if (data.get("website")) return; // robô
    if (!nome && !mensagem) {
      if (isCard) { window.location.href = gift.cardUrl; return; } // mensagem é opcional
      feedback.textContent = t("gifts.msg.empty");
      return;
    }

    const payload = {
      tipo: "presente",
      forma: isCard ? "Cartão" : "Pix",
      presente: gift.name,
      valor: gift.amount,
      nome,
      mensagem,
    };
    feedback.textContent = t("gifts.msg.sending");
    form.querySelectorAll("button").forEach((b) => (b.disabled = true));
    try {
      await notifyByEmail(payload);
      if (isCard) { window.location.href = gift.cardUrl; return; }
      feedback.textContent = t("gifts.msg.sent");
      form.querySelectorAll("input, textarea").forEach((el) => (el.disabled = true));
    } catch (err) {
      console.error("Gift message error:", err);
      if (isCard) { window.location.href = gift.cardUrl; return; } // não trava o pagamento
      feedback.textContent = t("gifts.msg.error");
      form.querySelectorAll("button").forEach((b) => (b.disabled = false));
    }
  });

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(codeBox.value);
    } catch {
      codeBox.select();
      document.execCommand("copy");
    }
    copyBtn.classList.add("is-copied");
    copyLabel.textContent = t("gifts.pix.copied");
    setTimeout(() => {
      copyBtn.classList.remove("is-copied");
      copyLabel.textContent = t("gifts.pix.copy");
    }, 2500);
  });

  select("#gift-close").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

function generatePixPayload(key, name, city, amount, description, txid) {
  const sanitize = (s) => (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const len2 = (v) => String(v.length).padStart(2, "0");
  const tlv = (id, value) => id + len2(value) + value;

  const gui = tlv("00", "BR.GOV.BCB.PIX");
  const k = tlv("01", String(key));
  const maxDesc = 99 - gui.length - k.length - 4;
  const descText = sanitize(description).replace(/[^\w .-]/g, "").slice(0, Math.max(0, maxDesc));
  const desc = descText ? tlv("02", descText) : "";
  const mai = tlv("26", gui + k + desc);

  const pfi = tlv("00", "01");              // Payload Format Indicator
  const pim = tlv("01", "11");              // Point of Initiation Method (11 = estático)
  const mcc = tlv("52", "0000");            // Merchant Category Code
  const cur = tlv("53", "986");             // Moeda = BRL (986)
  const amtFixed = Number(amount || 0).toFixed(2);
  const amt = amtFixed === "0.00" ? "" : tlv("54", amtFixed);
  const country = tlv("58", "BR");          // País
  const merchName = tlv("59", sanitize(name).slice(0, 25) || "PIX");
  const merchCity = tlv("60", sanitize(city).slice(0, 15) || "BRASIL");
  const addData = tlv("62", tlv("05", String(txid || "TXID").slice(0, 25)));

  let payload = pfi + pim + mai + mcc + cur + amt + country + merchName + merchCity + addData;
  // CRC
  const partial = payload + "6304";
  const crc = crc16(partial).toUpperCase();
  return partial + crc;
}

// CRC16-CCITT (polinômio 0x1021, init 0xFFFF)
function crc16(str) {
  let crc = 0xffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc <<= 1;
      }
      crc &= 0xffff;
    }
  }
  return crc.toString(16).padStart(4, "0");
}


