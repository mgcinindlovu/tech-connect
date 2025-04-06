// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP2sa7s1ywtnjUJNJKiEzKmJdZnkUKbfM",
  authDomain: "tech-connect-b14c2.firebaseapp.com",
  projectId: "tech-connect-b14c2",
  storageBucket: "tech-connect-b14c2.firebasestorage.app",
  messagingSenderId: "75392944962",
  appId: "1:75392944962:web:56bb24a3ea9607c6fb96db",
  measurementId: "G-VG4NZ6DBG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);