// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbR_WourhcNIfgIjXJz2nWUQMFnwO4mD8",
  authDomain: "newecommerce-9f5ec.firebaseapp.com",
  projectId: "newecommerce-9f5ec",
  storageBucket: "newecommerce-9f5ec.appspot.com",
  messagingSenderId: "77394073507",
  appId: "1:77394073507:web:494bdb49bd2e989c226c16",
  measurementId: "G-2DJJNQB0GZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
