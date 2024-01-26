// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Add
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP6zHDZfUUVxr68ljjg-4AbYMHAtCkoHc",
  authDomain: "mygame1-46590.firebaseapp.com",
  projectId: "mygame1-46590",
  storageBucket: "mygame1-46590.appspot.com",
  messagingSenderId: "677153586426",
  appId: "1:677153586426:web:92c6f4f9c57e7db93b5d43",
  measurementId: "G-S1VCXGJZWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Add
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };