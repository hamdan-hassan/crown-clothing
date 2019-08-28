import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBnZq1P7s_rtcNHTFgQCr61o9xG3U0UoSo",
  authDomain: "crown-db-b2b6e.firebaseapp.com",
  databaseURL: "https://crown-db-b2b6e.firebaseio.com",
  projectId: "crown-db-b2b6e",
  storageBucket: "",
  messagingSenderId: "786047088503",
  appId: "1:786047088503:web:7b896da1480ba7ce"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
