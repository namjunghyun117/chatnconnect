import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrUtr85USgTRxGavOQ0KpfYLY4SHOQiHc",
  authDomain: "chatnconnect-be3bb.firebaseapp.com",
  projectId: "chatnconnect-be3bb",
  storageBucket: "chatnconnect-be3bb.appspot.com",
  messagingSenderId: "1039824838333",
  appId: "1:1039824838333:web:c61e975eea1a1f7c6521d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
