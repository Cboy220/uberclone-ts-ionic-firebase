// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADscLF9ri8wA6SxWp4ep5NKYti-IloqHo",
  authDomain: "fixit-ionic-app.firebaseapp.com",
  projectId: "fixit-ionic-app",
  storageBucket: "fixit-ionic-app.appspot.com",
  messagingSenderId: "842200201597",
  appId: "1:842200201597:web:e0bed9e4c5acbe303ef414",
  measurementId: "G-KMRQTJJZY4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
