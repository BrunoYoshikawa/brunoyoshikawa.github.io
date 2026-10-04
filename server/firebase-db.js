import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, onSnapshot, doc, updateDoc, deleteDoc, setDoc, addDoc, writeBatch, query, orderBy } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app-check.js";
import { firebaseConfig, RECAPTCHA_SITE_KEY } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);

// App Check: precisa ser iniciado antes de usar o Firestore.
// Para testar localmente (localhost): cadastre um token em Firebase Console >
// App Check > Gerenciar tokens de depuração e, no console do navegador (F12), rode
//   localStorage.setItem("appCheckDebugToken", "<token>")
// Sem isso, o SDK gera um token novo e o mostra no console para ser cadastrado.
// O token NÃO fica no código: quem tem o token passa pelo App Check.
if (RECAPTCHA_SITE_KEY) {
  if (["localhost", "127.0.0.1"].includes(location.hostname)) {
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = localStorage.getItem("appCheckDebugToken") || true;
  }
  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(RECAPTCHA_SITE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
}
const db = getFirestore(app);
const auth = getAuth(app);

// Respostas do formulário de RSVP do site (home.html)
const RESPOSTAS = "respostas";
const respostasCollection = collection(db, RESPOSTAS);
// Lista de convidados (gestão, só admin)
const CONVIDADOS = "convidados";

/**
 * Database Service for RSVP
 */
export const dbService = {
  // Formulário público: cria uma nova resposta. O ID do documento é o e-mail,
  // e as regras só permitem criar (não sobrescrever) -> um RSVP por e-mail.
  // Envio repetido falha com err.code === "permission-denied".
  async submitRSVP({ nome, email, telefone = "", acompanhantes = 0, mensagem = "", lang = "pt" }) {
    const emailId = String(email).trim().toLowerCase();
    const data = {
      nome: String(nome).trim(),
      email: emailId,
      telefone: String(telefone).trim(),
      acompanhantes: Math.max(0, parseInt(acompanhantes, 10) || 0),
      mensagem: String(mensagem).trim(),
      lang,
      timestamp: new Date().toISOString(),
      status: "confirmado",
    };
    await setDoc(doc(db, RESPOSTAS, emailId), data);
    return { success: true, id: emailId };
  },

  // Admin: escuta as respostas em tempo real (mais recentes primeiro)
  subscribeToResponses(callback, onError) {
    const q = query(respostasCollection, orderBy("timestamp", "desc"));
    return onSnapshot(q, (snapshot) => {
      callback(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    }, onError);
  },

  // Admin: atualiza uma resposta
  async updateResponse(id, updatedData) {
    await updateDoc(doc(db, RESPOSTAS, id), updatedData);
    return { success: true };
  },

  // Admin: remove uma resposta
  async deleteResponse(id) {
    await deleteDoc(doc(db, RESPOSTAS, id));
    return { success: true };
  },

  // Admin: escuta a lista de convidados em tempo real
  subscribeToGuests(callback, onError) {
    return onSnapshot(collection(db, CONVIDADOS), (snapshot) => {
      callback(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    }, onError);
  },

  async addGuest(data) {
    const docRef = await addDoc(collection(db, CONVIDADOS), data);
    return { success: true, id: docRef.id };
  },

  async updateGuest(id, updatedData) {
    await updateDoc(doc(db, CONVIDADOS, id), updatedData);
    return { success: true };
  },

  async deleteGuest(id) {
    await deleteDoc(doc(db, CONVIDADOS, id));
    return { success: true };
  },

  // Admin: importa convidados em lote ({ id, ...dados }). Mesmo id = atualiza (merge),
  // então importar o mesmo CSV duas vezes não duplica e campos fora do CSV são mantidos.
  async importGuests(guests) {
    for (let i = 0; i < guests.length; i += 400) {
      const batch = writeBatch(db);
      guests.slice(i, i + 400).forEach(({ id, ...data }) => batch.set(doc(db, CONVIDADOS, id), data, { merge: true }));
      await batch.commit();
    }
    return { success: true, count: guests.length };
  },

  async deleteGuests(ids) {
    for (let i = 0; i < ids.length; i += 400) {
      const batch = writeBatch(db);
      ids.slice(i, i + 400).forEach((id) => batch.delete(doc(db, CONVIDADOS, id)));
      await batch.commit();
    }
    return { success: true, count: ids.length };
  },
};

/**
 * Autenticação do admin (Google). As regras do Firestore só liberam
 * leitura/edição para o e-mail definido em firestore.rules.
 */
export const authService = {
  signIn: () => signInWithPopup(auth, new GoogleAuthProvider()),
  signOut: () => signOut(auth),
  onChange: (callback) => onAuthStateChanged(auth, callback),
};
