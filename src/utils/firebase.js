// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbwdxsdj2hBkNy9NmKbca4mJG_AdNSkSQ",
  authDomain: "netflixgpt-3f3dc.firebaseapp.com",
  projectId: "netflixgpt-3f3dc",
  storageBucket: "netflixgpt-3f3dc.appspot.com",
  messagingSenderId: "162873818670",
  appId: "1:162873818670:web:89f55548e7e8520ab4e9bf",
  measurementId: "G-7QY667JBZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
