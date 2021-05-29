import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC5A3CuuTmmTeOjYSr5s6viVXerQfwe8Ow",
  authDomain: "crwn1-db-5d185.firebaseapp.com",
  projectId: "crwn1-db-5d185",
  storageBucket: "crwn1-db-5d185.appspot.com",
  messagingSenderId: "781798674215",
  appId: "1:781798674215:web:ccb4398561b14e0e826302",
  measurementId: "G-X4YTL9S1LM",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
