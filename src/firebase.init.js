// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBk229DE57g3w19C9s9YDcBo0M0a-4lmE",
  authDomain: "blogging-website-d737a.firebaseapp.com",
  projectId: "blogging-website-d737a",
  storageBucket: "blogging-website-d737a.appspot.com",
  messagingSenderId: "422613889577",
  appId: "1:422613889577:web:3b2d513be8211349dd6238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth ; 
