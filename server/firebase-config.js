// Firebase Configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBb_l5lcl5Mh0iSA4b1uLaQ8C-6gMWvcto",
  authDomain: "rsvp-casamento-62141.firebaseapp.com",
  projectId: "rsvp-casamento-62141",
  storageBucket: "rsvp-casamento-62141.firebasestorage.app",
  messagingSenderId: "359130900195",
  appId: "1:359130900195:web:c1f9fd2c8953e70c1107d6",
  measurementId: "G-13S6R46Q9Q"
};

// Firebase App Check com Fraud Defense (reCAPTCHA Enterprise): bloqueia chamadas
// ao Firestore que não vêm do site. Chave de SITE (pública), registrada em
// Firebase Console > App Check > Web-RSVP. Vazio = App Check desligado.
// (O provedor reCAPTCHA v3 "clássico" foi descontinuado no Firebase.)
export const RECAPTCHA_SITE_KEY = "6LcHLN8tAAAAANrYykNFUJ6QnmCKtRSErw3Bstl8";
