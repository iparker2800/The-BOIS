// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh4HUzF_0OcsidZTqflTs2K1sjneF7gRw",
  authDomain: "the-bois-1bd68.firebaseapp.com",
  projectId: "the-bois-1bd68",
  storageBucket: "the-bois-1bd68.appspot.com",
  messagingSenderId: "268379744417",
  appId: "1:268379744417:web:ade23a1a9c8eff0617e8e0",
  measurementId: "G-E2PGRED24B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);