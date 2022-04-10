// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqVrHX7CTCK-GEWLI3j4NVR0FkZDvv2bQ",
    authDomain: "router-firebase-integrat-30d5a.firebaseapp.com",
    projectId: "router-firebase-integrat-30d5a",
    storageBucket: "router-firebase-integrat-30d5a.appspot.com",
    messagingSenderId: "908406073595",
    appId: "1:908406073595:web:bbcbda1ce6a1f4fd0ce85e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;