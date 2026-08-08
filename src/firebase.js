// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkWYGyfxsf2CUkFr_GrJuQ-GPvcZGvrIU",
  authDomain: "dn-graphics.firebaseapp.com",
  databaseURL: "https://dn-graphics-default-rtdb.firebaseio.com",
  projectId: "dn-graphics",
  storageBucket: "dn-graphics.firebasestorage.app",
  messagingSenderId: "719831992125",
  appId: "1:719831992125:web:fe92b995effd62c3b26754",
  measurementId: "G-M5VTT5G0Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);