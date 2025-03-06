// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; 
import { getAuth } from 'firebase/auth';    

const firebaseConfig = {
  apiKey: "AIzaSyCNxEcEisdPXkibQk4S-UkhsVjOns1isFk",
  authDomain: "handyman-services123.firebaseapp.com",
  projectId: "handyman-services123",
  storageBucket: "handyman-services123.firebasestorage.app",
  messagingSenderId: "724533787694",
  appId: "1:724533787694:web:625898806bfb51d38fb3bf",
  measurementId: "G-KRVNEZNHSS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
const auth = getAuth(app);  

export { db, auth };