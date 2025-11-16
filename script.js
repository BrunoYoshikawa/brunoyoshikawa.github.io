// ====== Configuração rápida (edite estes valores) ======
const WEDDING_CONFIG = {
  coupleNames: "Bruno & Elizabete",
  date: "01 de Novembro de 2026",
  time: "15h30",
  venueName: "Fazenda Fagundes",
  venueAddress: "Rodovia Arão Sahm, S/N | Mairiporã - São Paulo",
  mapsQuery: "Fazenda Fagundes, Rodovia Arão Sahm, S/N, Mairiporã - São Paulo",
  rsvpEmail: "bruno.diego.yoshikawa@gmail.com", // Altere para o e-mail que receberá os RSVPs (fallback)
  sheetWebhookUrl: "https://script.google.com/macros/s/AKfycbyRu4kDtvoZvDUpv0-vxQVbidC-tVOg3oy_sBkDPGNDfcG501HD2z6l5UqgGleoPwIN/exec", // Cole aqui a URL do Web App do Google Apps Script quando publicar
  pixKey: "8f2d4a5f-8cf9-4be9-95dd-d4d490090077",
  pixReceiverName: "Bruno Diego Yoshikawa",
  pixReceiverCity: "SAO PAULO",
};
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
    "section.traje": "Como devo me vestir?",
    "about.text": "Será uma celebração intimista e cheia de amor, com cerimônia seguida de recepção. Prepare-se para uma noite especial com família e amigos, boa música e momentos inesquecíveis.",
    "traje.text": "Traje esporte fino, confortável para cerimônia no campo. Qualquer dúvida chamar a Elizabete que ela te explicará melhor.",
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
    "gifts.panela.title": "Jogo de panela Le Creuset",
    "gifts.panela.desc": "Aumentar o nível da cozinha em casa.",
    "gifts.cachorro.title": "Cachorrinho",
    "gifts.cachorro.desc": "Elizabete sempre falou que gostaria de um doguinho",
    "gifts.lego.title": "Kit LEGO para decoração",
    "gifts.lego.desc": "Adicionar à coleção da Elizabete na sala de estar",
    "gifts.oculos.title": "Óculos de corrida",
    "gifts.oculos.desc": "Importante para baixar o pace",
    "gifts.viagem.title": "Viagem NY — SP",
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
    "form.feedback.missingConfig": "Configuração de envio ausente. Avise os noivos, por favor.",
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
    "section.traje": "What should I wear?",
    "about.text": "It will be an intimate and loving celebration with a ceremony followed by a reception. Get ready for a special evening with family and friends, good music, and unforgettable moments.",
    "traje.text": "Smart casual, comfortable for a countryside outdoor ceremony. If you have any questions, please contact Elizabete and she will explain.",
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
    "gifts.panela.title": "Le Creuset cookware set",
    "gifts.panela.desc": "Level up our kitchen at home.",
    "gifts.cachorro.title": "Puppy",
    "gifts.cachorro.desc": "Elizabete has always wanted a little dog",
    "gifts.lego.title": "LEGO set for decoration",
    "gifts.lego.desc": "Add to Elizabete's living room collection",
    "gifts.oculos.title": "Running sunglasses",
    "gifts.oculos.desc": "Important to improve pace",
    "gifts.viagem.title": "Trip NY — SP",
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
  if (timeEl) timeEl.textContent = currentLang === "en" ? toEnglishTime(time) : time;
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
      coupleNames: WEDDING_CONFIG.coupleNames,
      timestamp: new Date().toISOString(),
      lang: currentLang,
      nome,
      email,
      telefone,
      acompanhantes: acompanhantes || "0",
      mensagem,
    };

    const endpoint = (WEDDING_CONFIG.sheetWebhookUrl || "").trim();

    if (!endpoint) {
      if (feedback) feedback.textContent = dict["form.feedback.missingConfig"];
      return;
    }

    // Envia para Apps Script (Sheets + e-mail) sem CORS/preflight
    fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    })
      .then(() => {
        // Resposta é "opaque" em no-cors; assumimos sucesso
        if (feedback) feedback.textContent = dict["form.feedback.success"];
        form.reset();
      })
      .catch(() => {
        if (feedback) feedback.textContent = dict["form.feedback.error"];
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

// ====== Presentes: Pix QR ======
function setupGiftsPix() {
  const modal = document.querySelector("#pix-modal");
  const closeBtn = document.querySelector("#pix-close");
  const qrcodeDiv = document.querySelector("#qrcode");
  const pixText = document.querySelector("#pixText");
  const qrImg = document.querySelector("#qrcodeImg");
  const qrDownload = document.querySelector("#qrcodeDownload");
  const copyBtn = document.querySelector("#pix-copy");
  if (!modal || !qrcodeDiv) return; // só na página de presentes

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".gift-pix");
    if (!btn) return;
    // Se o botão tiver um link específico, usa-o; caso contrário, usa o link padrão
    const specificLink = btn.getAttribute("data-link");
    if (specificLink) {
      window.location.href = specificLink;
      return;
    }
    window.location.href = "https://donate.stripe.com/aFa8wPc7U22z13B7J69AA02";
    return;
    const title = btn.getAttribute("data-title") || "Presente";
    const amountStr = btn.getAttribute("data-amount") || "0";
    const amount = Number(amountStr);

    const key = WEDDING_CONFIG.pixKey || "";
    const name = WEDDING_CONFIG.pixReceiverName || "";
    const city = WEDDING_CONFIG.pixReceiverCity || "";
    if (!key || !name || !city) {
      alert("Configuração do Pix ausente. Verifique pixKey, pixReceiverName e pixReceiverCity.");
      return;
    }
    const txid = "CASAMENTO" + Math.floor(Math.random() * 100000);
    const payload = generatePixPayload(key, name, city, amount, title, txid);

    // Limpa/oculta anteriores
    qrcodeDiv.innerHTML = "";
    qrcodeDiv.style.display = "none";
    if (qrImg) {
      qrImg.removeAttribute("src");
      qrImg.style.display = "none";
    }
    if (window.QRCode) {
      const applyImage = (url, filenameExt = "png") => {
        if (!url) return false;
        if (qrcodeDiv) {
          qrcodeDiv.innerHTML = "";
          qrcodeDiv.style.display = "none";
        }
        if (qrImg) {
          qrImg.src = url;
          qrImg.style.display = "block";
        }
        if (qrDownload) {
          qrDownload.href = url;
          qrDownload.download = `pix-${txid}.${filenameExt}`;
        }
        return true;
      };
      const applySvg = (svg) => {
        if (!svg) return false;
        if (qrImg) {
          qrImg.removeAttribute("src");
          qrImg.style.display = "none";
        }
        if (qrcodeDiv) {
          qrcodeDiv.innerHTML = svg;
          qrcodeDiv.style.display = "block";
        }
        try {
          const blob = new Blob([svg], { type: "image/svg+xml" });
          const url = URL.createObjectURL(blob);
          if (qrDownload) {
            qrDownload.href = url;
            qrDownload.download = `pix-${txid}.svg`;
          }
        } catch (_e) {}
        return true;
      };
      const tryDataURL = () => new Promise((resolve) => {
        if (typeof QRCode.toDataURL !== "function") return resolve(false);
        try {
          const res = QRCode.toDataURL(payload, { width: 256 });
          const done = (url) => resolve(applyImage(url, "png"));
          if (res && typeof res.then === "function") {
            res.then(done).catch(() => resolve(false));
          } else if (typeof res === "string") {
            done(res);
          } else {
            QRCode.toDataURL(payload, { width: 256 }, (err, url) => {
              resolve(!err && applyImage(url, "png"));
            });
          }
        } catch (_e) { resolve(false); }
      });
      const tryCanvas = () => new Promise((resolve) => {
        if (typeof QRCode.toCanvas !== "function") return resolve(false);
        try {
          const off = document.createElement("canvas");
          const maybe = QRCode.toCanvas(off, payload, { width: 256 });
          const after = () => {
            try {
              const url = off.toDataURL("image/png");
              resolve(applyImage(url, "png"));
            } catch (_e) { resolve(false); }
          };
          if (maybe && typeof maybe.then === "function") {
            maybe.then(after).catch(() => resolve(false));
          } else {
            after();
          }
        } catch (_e) { resolve(false); }
      });
      const trySvg = () => new Promise((resolve) => {
        if (typeof QRCode.toString !== "function") return resolve(false);
        try {
          const resStr = QRCode.toString(payload, { type: "svg", width: 256 });
          const done = (svg) => resolve(applySvg(svg));
          if (resStr && typeof resStr.then === "function") {
            resStr.then(done).catch(() => resolve(false));
          } else if (typeof resStr === "string") {
            done(resStr);
          } else {
            QRCode.toString(payload, { type: "svg", width: 256 }, (err, svg) => {
              resolve(!err && applySvg(svg));
            });
          }
        } catch (_e) { resolve(false); }
      });
      // Tenta em sequência para garantir apenas UMA saída
      tryDataURL()
        .then((ok) => ok ? true : tryCanvas())
        .then((ok) => ok ? true : trySvg())
        .catch(() => {});
    }
    if (pixText) pixText.textContent = payload;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  });

  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  };
  if (closeBtn) closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const text = (pixText && pixText.textContent) || "";
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = "Copiado!";
        setTimeout(() => (copyBtn.textContent = "Copiar código"), 1500);
      } catch {
        // fallback silencioso
      }
    });
  }
}

function generatePixPayload(key, name, city, amount, description, txid) {
  const sanitize = (s) => (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const len2 = (v) => String(v.length).padStart(2, "0");
  const tlv = (id, value) => id + len2(value) + value;

  const gui = tlv("00", "BR.GOV.BCB.PIX");
  const k = tlv("01", String(key));
  const desc = description ? tlv("02", String(description).slice(0, 99)) : "";
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


