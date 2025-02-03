// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjMbybu-_ej4mrsmVaHAIhMHS0YeoJ4Is",
  authDomain: "react-shopping-app-d8486.firebaseapp.com",
  projectId: "react-shopping-app-d8486",
  storageBucket: "react-shopping-app-d8486.firebasestorage.app",
  messagingSenderId: "1006305975616",
  appId: "1:1006305975616:web:e6c6f6f43e6708467eaea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;