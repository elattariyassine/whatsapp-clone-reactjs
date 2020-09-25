import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7oQG33s4oNMOi_TW_wmFkHdDoooIxwuw",
  authDomain: "react-whatsapp-cloned.firebaseapp.com",
  databaseURL: "https://react-whatsapp-cloned.firebaseio.com",
  projectId: "react-whatsapp-cloned",
  storageBucket: "react-whatsapp-cloned.appspot.com",
  messagingSenderId: "129225712415",
  appId: "1:129225712415:web:ed46c9a0147d4a7829862a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
