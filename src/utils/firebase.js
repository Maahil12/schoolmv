// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "schoolnewsmv.firebaseapp.com",
  projectId: "schoolnewsmv",
  storageBucket: "schoolnewsmv.appspot.com",
  messagingSenderId: "430013516287",
  appId: "1:430013516287:web:9bffe55596377f407a3fca",
  measurementId: "G-PTBTKMV17F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
