// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "***************************************",
  authDomain: "flashcardsaas-9464f.firebaseapp.com",
  projectId: "flashcardsaas-9464f",
  storageBucket: "flashcardsaas-9464f.appspot.com",
  messagingSenderId: "749428651722",
  appId: "1:749428651722:web:bdc191984bfc649d0b6633",
  measurementId: "G-RMN9YZXND4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
