import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//https://stackoverflow.com/questions/69044315/module-not-found-cant-resolve-firebase-in

const firebaseConfig = {
  apiKey: "AIzaSyA_yKvkZWhiQzJRm08Bzf7v4HY_E2tlYek",
  authDomain: "tenedores-143aa.firebaseapp.com",
  projectId: "tenedores-143aa",
  storageBucket: "tenedores-143aa.appspot.com",
  messagingSenderId: "108929663985",
  appId: "1:108929663985:web:fa99857383f2ffa4d83a50",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { firebaseApp};
