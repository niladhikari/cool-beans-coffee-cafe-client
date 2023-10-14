// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUk3RbOI_9heGo9jjV0duwfbVB-HROvU0",
  authDomain: "react-tarvel-guru-auth.firebaseapp.com",
  projectId: "react-tarvel-guru-auth",
  storageBucket: "react-tarvel-guru-auth.appspot.com",
  messagingSenderId: "344913118788",
  appId: "1:344913118788:web:7ad27e0e084650af1bde11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
