// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC57LR4DkRhRXqIjILrBDMlhvmLZdnMld0",
    authDomain: "ema-john-with-router-auth.firebaseapp.com",
    projectId: "ema-john-with-router-auth",
    storageBucket: "ema-john-with-router-auth.appspot.com",
    messagingSenderId: "521478153771",
    appId: "1:521478153771:web:1b1da1bf53f2106b886c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;