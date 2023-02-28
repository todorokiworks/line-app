import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDy1_H8skAu30UHExHa_YsdamN3HFEZK3k",
  authDomain: "line-5c0c2.firebaseapp.com",
  projectId: "line-5c0c2",
  storageBucket: "line-5c0c2.appspot.com",
  messagingSenderId: "447013705373",
  appId: "1:447013705373:web:7492c8b23c7e2874936674",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
