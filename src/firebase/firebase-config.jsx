// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWg_RpUdpGlmOTuz5NQds-BNTFy0bkXcM",
  authDomain: "qwgdatabase.firebaseapp.com",
  projectId: "qwgdatabase",
  storageBucket: "qwgdatabase.appspot.com",
  messagingSenderId: "789779546871",
  appId: "1:789779546871:web:232e2caa274bff61a149f2",
  measurementId: "G-99XPP3RDFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };