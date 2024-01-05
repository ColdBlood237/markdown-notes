// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYjKiXQB3KjTFX86qRGODVWH2gBX3I61Y",
  authDomain: "markdown-notes-b70d4.firebaseapp.com",
  projectId: "markdown-notes-b70d4",
  storageBucket: "markdown-notes-b70d4.appspot.com",
  messagingSenderId: "620231479542",
  appId: "1:620231479542:web:7d2211fc7fa6fff6a35cd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
