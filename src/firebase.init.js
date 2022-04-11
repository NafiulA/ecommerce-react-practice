// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuZpgIrM3ToaEizJJ2OiaBHNxbuvgq2aU",
    authDomain: "ema-john-shop-223a3.firebaseapp.com",
    projectId: "ema-john-shop-223a3",
    storageBucket: "ema-john-shop-223a3.appspot.com",
    messagingSenderId: "943071387403",
    appId: "1:943071387403:web:c19c7f7bcbc44964568c0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;