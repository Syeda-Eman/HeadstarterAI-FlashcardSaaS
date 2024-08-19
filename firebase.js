// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQJw62gQTBYASMHYQGwsxUXITNTOddjJk",
  authDomain: "flashcardsaas-eaf10.firebaseapp.com",
  projectId: "flashcardsaas-eaf10",
  storageBucket: "flashcardsaas-eaf10.appspot.com",
  messagingSenderId: "496018064038",
  appId: "1:496018064038:web:9865c6851e8fa771feea67",
  measurementId: "G-J1JVCRX954"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); 

export { db }