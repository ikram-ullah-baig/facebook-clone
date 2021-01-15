import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQjYlxdM_8agIShg6vbkgVlXcfZqFqBxo",
  authDomain: "facebook-clone-5fd4b.firebaseapp.com",
  projectId: "facebook-clone-5fd4b",
  storageBucket: "facebook-clone-5fd4b.appspot.com",
  messagingSenderId: "269323883929",
  appId: "1:269323883929:web:84a8d8e935967df7bb2f08",
  measurementId: "G-6XK8RLTG6R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;