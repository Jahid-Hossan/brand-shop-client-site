// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFy2GW4ywprD1P3IdCmI5mPXm5VZJe0r8",
    authDomain: "gedgets-shop.firebaseapp.com",
    projectId: "gedgets-shop",
    storageBucket: "gedgets-shop.appspot.com",
    messagingSenderId: "1028233943587",
    appId: "1:1028233943587:web:065cd0abb71c633e072f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;