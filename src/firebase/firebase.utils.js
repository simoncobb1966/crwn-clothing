import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBUmxn7odng8i835_uwmsHqkB5o7itaNVw",
  authDomain: "crwn-db-c2b4b.firebaseapp.com",
  projectId: "crwn-db-c2b4b",
  storageBucket: "crwn-db-c2b4b.appspot.com",
  messagingSenderId: "212938624164",
  appId: "1:212938624164:web:cf72a0343d4b5243dc2a31",
  measurementId: "G-JEXQTRYY51",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
