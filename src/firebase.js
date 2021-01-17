import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBpwiX3qTHIPBh-zIqMvZRYEeqrBwiZys",
  authDomain: "facebook-clone1-e4ee6.firebaseapp.com",
  projectId: "facebook-clone1-e4ee6",
  storageBucket: "facebook-clone1-e4ee6.appspot.com",
  messagingSenderId: "731830218716",
  appId: "1:731830218716:web:24cca5e7bb46c753232919",
  measurementId: "G-WE4MMKGDKF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db