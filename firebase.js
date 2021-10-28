import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7rfNOU9uCn-GJhtpkYfEAfRJd5l8fvSo",
    authDomain: "sitioencuestas.firebaseapp.com",
    projectId: "sitioencuestas",
    storageBucket: "sitioencuestas.appspot.com",
    messagingSenderId: "287292305673",
    appId: "1:287292305673:web:8864995f4f77aaf9aae3d8",
    measurementId: "G-KGPN7YVDQ1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore();