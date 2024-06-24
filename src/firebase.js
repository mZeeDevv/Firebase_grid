import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCC2ybOGGsNYQXKVRGcmbbuCdUtIIHhhqM",
  authDomain: "bryntum-grid-a9024.firebaseapp.com",
  projectId: "bryntum-grid-a9024",
  storageBucket: "bryntum-grid-a9024.appspot.com",
  messagingSenderId: "495310120692",
  appId: "1:495310120692:web:13830fcef75a3e06e620a1",
  measurementId: "G-9CPX040P2E"
};

initializeApp(firebaseConfig);
 
export const db = getFirestore();