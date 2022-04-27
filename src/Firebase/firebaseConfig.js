// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Fi frrebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMoWyY_wHzD2uB3JTgviqu_OGvRMfWJdk",
  authDomain: "asistente-prof.firebaseapp.com",
  projectId: "asistente-prof",
  storageBucket: "asistente-prof.appspot.com",
  messagingSenderId: "213238508775",
  appId: "1:213238508775:web:a861e62a4cfbd1eed88642"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()
const getMyData = getFirestore()

export {
  app,
  google,
  getMyData,
  facebook
}