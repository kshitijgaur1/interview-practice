// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsUKjeLHT2VBy9KoGLnEnLiAM3Qpn6yww",
  authDomain: "prepwise-1b75e.firebaseapp.com",
  projectId: "prepwise-1b75e",
  storageBucket: "prepwise-1b75e.firebasestorage.app",
  messagingSenderId: "689671774658",
  appId: "1:689671774658:web:c854ccfb8478f32b30765b",
  measurementId: "G-0XB7XE6KXM"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
