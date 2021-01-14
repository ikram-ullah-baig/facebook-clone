import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC2NY5tPcRQ6gxmLktQtnVVqyoTOIPvMgA",
    authDomain: "facebook-clone-d38a5.firebaseapp.com",
    projectId: "facebook-clone-d38a5",
    storageBucket: "facebook-clone-d38a5.appspot.com",
    messagingSenderId: "577341415485",
    appId: "1:577341415485:web:265e54db436327c40cca54"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;