import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH2NXO8W2FCK6tIchno_1CvZvEfcZ5WGk",
    authDomain: "lc-ranklist.firebaseapp.com",
    projectId: "lc-ranklist",
    storageBucket: "lc-ranklist.appspot.com",
    messagingSenderId: "1009040168174",
    appId: "1:1009040168174:web:c99dd5827cc8256bcdcfff"
};

const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {db,auth};