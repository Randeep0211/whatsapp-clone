import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyDp2L-uRXdOpjDqX-QPBFH2yEFD3AiVyQ8",
  authDomain: "whatsapp-clone-d1cc9.firebaseapp.com",
  projectId: "whatsapp-clone-d1cc9",
  storageBucket: "whatsapp-clone-d1cc9.appspot.com",
  messagingSenderId: "390855148099",
  appId: "1:390855148099:web:d0b7613d7b164cb4900af6"
};

const firebaseApp= firebase.initializeApp(firebaseConfig)

const db= firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db;