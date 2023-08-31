// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:
    process.env.REACT_APP_FIREBASE_API_KEY ||
    " AIzaSyCtkwTPHYJKAQD4sU0-jCaAIX7UkOdaObc",
  authDomain:
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ||
    "netflix-353d7.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "netflix-353d7",
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
    "netflix-353d7.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER || "980964031771",
  appId:
    process.env.REACT_APP_APP_ID || "1:980964031771:web:a0e684fe99f41ff78b67be",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
