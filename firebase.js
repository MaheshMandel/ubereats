// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCO1S8kbIogxJ1JEfgfZNf2zYpZVq0dQGw",
    authDomain: "uber-eats-e81b5.firebaseapp.com",
    projectId: "uber-eats-e81b5",
    storageBucket: "uber-eats-e81b5.appspot.com",
    messagingSenderId: "671412244672",
    appId: "1:671412244672:web:1e315c50da887527999d25",
    measurementId: "G-3WJREWPP6V"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, provider, auth, analytics };