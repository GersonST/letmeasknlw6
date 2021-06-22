import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDeuptrJd05YfZ8Mwbz_FVql1GmGcPBE7o",
  authDomain: "letmeask-40c89.firebaseapp.com",
  databaseURL: "https://letmeask-40c89-default-rtdb.firebaseio.com",
  projectId: "letmeask-40c89",
  storageBucket: "letmeask-40c89.appspot.com",
  messagingSenderId: "627928048083",
  appId: "1:627928048083:web:dfbb7b642e1cb858980f26",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const database = firebase.database();

export { firebase, auth, database };
