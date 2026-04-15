// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwfh77IJYBY3hb0q3uD1SWp7F_AnKoWUo",
  authDomain: "mychatroom-8b363.firebaseapp.com",
  projectId: "mychatroom-8b363",
  storageBucket: "mychatroom-8b363.firebasestorage.app",
  messagingSenderId: "726955424227",
  appId: "1:726955424227:web:938003989b62196a1048d6",
  measurementId: "G-2PFQBHC93E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
