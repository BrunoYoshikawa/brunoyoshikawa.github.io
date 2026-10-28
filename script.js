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
// ====== Hotéis (seção "Onde ficar") ======
// Campos opcionais: o que estiver vazio não aparece no card.
//   photo: imagem em assets/hoteis/ (sem foto, mostra um fundo neutro)
//   rating / ratingMax: nota (ex.: 4.4 de 5) + ratingSource (ex.: "Google")
//   distanceKm / driveMin: distância e tempo de carro até a fazenda (Google Maps)
//   english: true se a equipe fala inglês
//   bookingUrl: link do Booking.com; siteUrl: site oficial do hotel.
//   O botão usa bookingUrl, senão siteUrl, senão abre o Google Maps.
// Notas e rotas do Google Maps conferidas em 21/10/2026.
const HOTELS = [
  {
    name: "Hotel Spinn",
    photo: "./assets/hoteis/spinn.jpg", // foto do site oficial do hotel
    rating: 4.2,
    ratingMax: 5,
    ratingSource: "Google",
    distanceKm: 4.4,
    driveMin: 10,
    english: false,
    bookingUrl: "",
    siteUrl: "https://www.hotelspinn.com.br/",
    mapsQuery: "Hotel Spinn, Alameda Dona Sinharinha Passarella, 50, Mairiporã",
  },
  {
    name: "Graal Inn Mairiporã",
    photo: "./assets/hoteis/graal-inn.jpg", // foto do site oficial do hotel
    rating: 4.4,
    ratingMax: 5,
    ratingSource: "Google",
    distanceKm: 17.7,
    driveMin: 23,
    english: false,
    bookingUrl: "",
    siteUrl: "https://www.graalinnhoteis.com.br/hoteis/hotel-graal-inn-mairipora",
    mapsQuery: "Graal Inn Mairiporã",
  },
  {
    name: "ibis Guarulhos",
    photo: "./assets/hoteis/ibis-guarulhos.jpg", // foto do site oficial do hotel
    rating: 4.2,
    ratingMax: 5,
    ratingSource: "Google",
    distanceKm: 27.1,
    driveMin: 25,
    english: false,
    bookingUrl: "",
    siteUrl: "https://all.accor.com/hotel/5021/index.pt-br.shtml",
    mapsQuery: "ibis Guarulhos, R. Gen. Osório, 19, Guarulhos",
  },
];

const I18N = {
  pt: {
    titleBase: "Nosso Casamento",
    titleNames: "Bruno e Elizabete",
    "nav.casamento": "O Casamento",
    "nav.local": "Local",
    "nav.hoteis": "Onde ficar",
    "nav.programacao": "Programação",
    "wedding-weekday": "Domingo",
    "nav.confirmar": "Confirmar presença",
    "nav.presentes": "Presentes",
    "hero.subtitle": "Estamos muito felizes em compartilhar este momento com você. Abaixo você encontra todas as informações sobre o grande dia!",
    "hero.confirmar": "Confirmar presença",
    "hero.verLocal": "Ver local",
    "section.sobre": "Sobre o casamento",
    "section.local": "Local",
    "section.programacao": "Programação",
    "programacao.1": "Chegada e coquetel de recepção dos convidados",
    "programacao.2": "Início da cerimônia",
    "programacao.3": "Recepção e jantar",
    "programacao.4": "Banda ao vivo",
    "programacao.5": "After party",
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
    "local.fotos.credito": "Fotos: Fazenda Fagundes",
    "local.eyebrow": "Cerimônia e festa",
    "local.arLivre": "Cerimônia ao ar livre, na grama",
    "local.waze": "Abrir no Waze",
    "lightbox.fechar": "Fechar",
    "section.hoteis": "Onde ficar",
    "hoteis.intro": "Selecionamos alguns hotéis próximos da fazenda para a sua conveniência.",
    "hoteis.km": "km do local",
    "hoteis.min": "min de carro",
    "hoteis.ingles": "Equipe fala inglês",
    "hoteis.reservar": "Reservar no Booking.com",
    "hoteis.site": "Reservar no site do hotel",
    "hoteis.mapa": "Ver no Google Maps",
    "hoteis.nota": "Precisa de ajuda com hospedagem ou transporte? Fale com a gente!",
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
    titleNames: "Bruno & Elizabete",
    "nav.casamento": "The Wedding",
    "nav.local": "Venue",
    "nav.hoteis": "Where to stay",
    "nav.programacao": "Schedule",
    "wedding-weekday": "Sunday",
    "nav.confirmar": "RSVP",
    "nav.presentes": "Gifts",
    "hero.subtitle": "We are very happy to share this moment with you. Below you will find all the information about the big day!",
    "hero.confirmar": "RSVP",
    "hero.verLocal": "See venue",
    "section.sobre": "About the wedding",
    "section.local": "Venue",
    "section.programacao": "Schedule",
    "programacao.1": "Guest arrival and welcome cocktail",
    "programacao.2": "Ceremony begins",
    "programacao.3": "Reception and dinner",
    "programacao.4": "Live band",
    "programacao.5": "After party",
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
    "local.fotos.credito": "Photos: Fazenda Fagundes",
    "local.eyebrow": "Ceremony and reception",
    "local.arLivre": "Outdoor ceremony, on the grass",
    "local.waze": "Open in Waze",
    "lightbox.fechar": "Close",
    "section.hoteis": "Where to stay",
    "hoteis.intro": "We picked a few hotels near the venue for your convenience.",
    "hoteis.km": "km from the venue",
    "hoteis.min": "min by car",
    "hoteis.ingles": "English-speaking staff",
    "hoteis.reservar": "Book on Booking.com",
    "hoteis.site": "Book on the hotel's website",
    "hoteis.mapa": "View on Google Maps",
    "hoteis.nota": "Need help with accommodation or transportation? Let us know!",
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
  renderHotels(); // números com vírgula/ponto conforme o idioma
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
  // Aba do navegador: "Bruno e Elizabete - Nosso Casamento"
  document.title = `${dict.titleNames} - ${dict.titleBase}`;

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
  const wazeA = select("#waze-link");
  if (mapsA) mapsA.href = mapsLink;
  if (mapsIframe && mapsIframe.src !== embedSrc) mapsIframe.src = embedSrc; // não recarrega o mapa ao trocar de idioma
  if (wazeA) wazeA.href = `https://waze.com/ul?q=${q}&navigate=yes`;

  // Card do local: "Domingo, 01 de Novembro de 2026 • 15:30"
  const whenEl = select("#venue-when");
  if (whenEl) {
    const w = getWeekdayFromPtDate(date);
    const weekday = w && typeof w === "object" ? (currentLang === "en" ? w.en : w.pt) : "";
    const d = currentLang === "en" ? toEnglishDate(date) : date;
    const t = currentLang === "en" ? toEnglishTime(time) : (time || "").toString().replace(/[hH]/, ":");
    whenEl.textContent = `${weekday ? weekday + ", " : ""}${d} • ${t}`;
  }

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
    import("./server/firebase-db.js?v=20261028b")
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

// ====== Animação ao rolar: elementos aparecem quando entram na tela ======
// Além destes seletores, qualquer elemento com class="reveal" no HTML também anima.
const REVEAL_SELECTORS = [
  ".hero-content > *",
  ".section-title",
  ".section-intro",
  ".about-text",
  ".dress-code",
  ".venue-card",
  ".map-card",
  ".venue-photos img",
  ".form",
  ".gift-card",
  ".timeline-item",
  ".hotel-card",
  ".hotels-note",
];

function setupReveal() {
  if (!("IntersectionObserver" in window)) return; // navegador antigo: tudo visível
  const els = [...document.querySelectorAll([".reveal", ...REVEAL_SELECTORS].join(","))];
  els.forEach((el) => el.classList.add("reveal"));
  // Dentro de um elemento que já anima, não anima de novo
  const roots = els.filter((el) => !el.parentElement.closest(".reveal"));
  els.filter((el) => !roots.includes(el)).forEach((el) => el.classList.remove("reveal"));

  const io = new IntersectionObserver((entries) => {
    // Entrou na tela, ou ficou para trás num salto (link com âncora, reload no meio da página)
    const shown = entries.filter((e) => e.isIntersecting || e.boundingClientRect.bottom < 0);
    // Os que entram juntos aparecem em cascata (ex.: cards de presentes)
    shown.forEach((e, i) => {
      e.target.style.setProperty("--reveal-delay", `${Math.min(i, 5) * 90}ms`);
      e.target.classList.add("is-visible");
      io.unobserve(e.target); // anima só uma vez
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  roots.forEach((el) => io.observe(el));
}

// ====== Hotéis: monta os cards a partir de HOTELS ======
// Os textos fixos usam data-i18n, então a troca de idioma funciona sem redesenhar.
function renderHotels() {
  const grid = select("#hotel-grid");
  if (!grid) return;
  const ICONS = {
    star: '<path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" fill="currentColor"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>',
  };
  const icon = (name) => `<svg class="hotel-icon hotel-icon-${name}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const num = (n) => (currentLang === "pt" ? String(n).replace(".", ",") : String(n)); // 7.1 -> 7,1 em português

  grid.innerHTML = HOTELS.map((h) => {
    const facts = [
      h.rating != null && `<li>${icon("star")}<span>${num(h.rating)}/${h.ratingMax || 5} <span class="muted">(${esc(h.ratingSource || "")})</span></span></li>`,
      h.distanceKm != null && `<li>${icon("pin")}<span>~${num(h.distanceKm)} <span data-i18n="hoteis.km">km do local</span></span></li>`,
      h.driveMin != null && `<li>${icon("clock")}<span>~${h.driveMin} <span data-i18n="hoteis.min">min de carro</span></span></li>`,
      h.english && `<li>${icon("globe")}<span data-i18n="hoteis.ingles">Equipe fala inglês</span></li>`,
    ].filter(Boolean).join("");
    const href = h.bookingUrl || h.siteUrl || `https://www.google.com/maps/search/?api=1&query=${encodeRFC3986(h.mapsQuery || h.name)}`;
    const label = h.bookingUrl ? "hoteis.reservar" : h.siteUrl ? "hoteis.site" : "hoteis.mapa";
    return `
      <article class="hotel-card">
        <div class="hotel-photo">
          ${h.photo ? `<img src="${esc(h.photo)}" alt="${esc(h.name)}" loading="lazy" />` : ""}
        </div>
        <div class="hotel-body">
          <h3 class="hotel-name">${esc(h.name)}</h3>
          ${facts ? `<ul class="hotel-facts">${facts}</ul>` : ""}
          <a class="btn btn-primary hotel-btn" href="${esc(href)}" target="_blank" rel="noopener">
            <span data-i18n="${label}"></span>${icon("external")}
          </a>
        </div>
      </article>`;
  }).join("");
}

// ====== Imagem ampliada: clicar numa foto abre em tela cheia ======
const LIGHTBOX_SELECTORS = [".venue-photos img", ".hotel-photo img", ".dress-image", ".gift-image"];

function setupLightbox() {
  const t = (key) => (I18N[currentLang] || I18N.pt)[key] || I18N.pt[key];
  const box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-hidden", "true");
  box.innerHTML = '<button type="button" class="lightbox-close">✕</button><figure><img alt="" /><figcaption></figcaption></figure>';
  document.body.appendChild(box);
  const img = box.querySelector("img");
  const caption = box.querySelector("figcaption");
  const closeBtn = box.querySelector(".lightbox-close");
  let lastFocus = null;

  const open = (src, alt) => {
    lastFocus = document.activeElement;
    img.src = src;
    img.alt = alt || "";
    caption.textContent = alt || "";
    closeBtn.setAttribute("aria-label", t("lightbox.fechar"));
    box.classList.add("is-open");
    box.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    closeBtn.focus();
  };
  const close = () => {
    if (!box.classList.contains("is-open")) return;
    box.classList.remove("is-open");
    box.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    if (lastFocus) lastFocus.focus();
  };

  // Delegação: funciona também para os cards de hotel montados depois (renderHotels)
  const selector = LIGHTBOX_SELECTORS.join(",");
  const mark = () => document.querySelectorAll(selector).forEach((el) => {
    el.classList.add("zoomable");
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
  });
  mark();
  new MutationObserver(mark).observe(document.body, { childList: true, subtree: true });

  document.addEventListener("click", (e) => {
    const el = e.target.closest(selector);
    if (el && !box.contains(el)) open(el.currentSrc || el.src, el.alt);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
    const el = e.target.closest?.(selector);
    if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(el.currentSrc || el.src, el.alt); }
  });
  box.addEventListener("click", (e) => { if (e.target !== img) close(); });
}

// ====== Init ======
document.addEventListener("DOMContentLoaded", () => {
  currentLang = getLanguage();
  renderHotels(); // antes do applyI18N, que preenche os textos dos cards
  applyI18N();
  populateContent();
  setupSmoothScroll();
  setupHeaderScrollState();
  setupRSVPForm();
  setupLanguageSwitcherUI();
  setupGiftsPix();
  setupReveal();
  setupLightbox();
});

// ====== Idioma: switch PT | EN com as duas bandeiras ======
function setupLanguageSwitcherUI() {
  const sw = document.querySelector(".lang-switch");
  if (!sw) return;
  const render = () => {
    sw.dataset.active = currentLang;
    sw.querySelectorAll(".lang-opt").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === currentLang)));
  };
  sw.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-opt");
    if (!btn || btn.dataset.lang === currentLang) return;
    setLanguage(btn.dataset.lang);
    render();
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

  // Cartão: registra o presente no Firestore e segue para o Stripe com o id do registro.
  // O verificador (verificador/index.js, no GitHub Actions) confirma o pagamento e avisa por e-mail.
  async function payWithCard(nome, mensagem) {
    feedback.textContent = t("gifts.msg.sending");
    form.querySelectorAll("button").forEach((b) => (b.disabled = true));
    let url = gift.cardUrl;
    try {
      const { dbService } = await import("./server/firebase-db.js?v=20261028b");
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 8000));
      const id = await Promise.race([dbService.registerGift({
        presente: gift.name,
        valorSugerido: gift.amount,
        nome,
        mensagem,
        linkPagamento: gift.cardUrl,
        lang: currentLang,
      }), timeout]);
      url += (url.includes("?") ? "&" : "?") + "client_reference_id=" + encodeURIComponent(id);
    } catch (err) {
      // Não trava o pagamento: sem o id, o pagamento chega como "sem mensagem no site"
      console.error("Gift register error:", err);
    }
    window.location.href = url;
  }

  // Pix: envia nome + mensagem por e-mail. Cartão: registra e segue para o Stripe.
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!gift) return;
    const data = new FormData(form);
    const nome = String(data.get("nome") || "").trim();
    const mensagem = String(data.get("mensagem") || "").trim();
    const isCard = gift.mode === "card";

    if (data.get("website")) return; // robô
    if (isCard) return payWithCard(nome, mensagem); // nome e mensagem são opcionais
    if (!nome && !mensagem) {
      feedback.textContent = t("gifts.msg.empty");
      return;
    }

    const payload = {
      tipo: "presente",
      forma: "Pix",
      presente: gift.name,
      valor: gift.amount,
      nome,
      mensagem,
    };
    feedback.textContent = t("gifts.msg.sending");
    form.querySelectorAll("button").forEach((b) => (b.disabled = true));
    try {
      await notifyByEmail(payload);
      feedback.textContent = t("gifts.msg.sent");
      form.querySelectorAll("input, textarea").forEach((el) => (el.disabled = true));
    } catch (err) {
      console.error("Gift message error:", err);
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


