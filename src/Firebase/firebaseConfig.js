// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Fi frrebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt2zTuXV5-_9Oqg5qAMha4U-IG1v7BGzU",
  authDomain: "ed-proyect1.firebaseapp.com",
  projectId: "ed-proyect1",
  storageBucket: "ed-proyect1.appspot.com",
  messagingSenderId: "266380416371",
  appId: "1:266380416371:web:d0a99bf3e896031fbb2106"
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