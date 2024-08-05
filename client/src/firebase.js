// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "real-estate-6bac8.firebaseapp.com",
  projectId: "real-estate-6bac8",
  storageBucket: "real-estate-6bac8.appspot.com",
  messagingSenderId: "195345715875",
  appId: "1:195345715875:web:0f3e29e3a50e82b6b2a516"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);