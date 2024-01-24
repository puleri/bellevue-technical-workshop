import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "ADD YOUR STUFF HERE",
  authDomain: "IT WILL LOOK LIKE THIS",
  projectId: "KINDA",
  storageBucket: "BUT DIFFERENT",
  messagingSenderId: "REACH OUT TO US",
  appId: "WITH ANY QUESTIONS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const providor = new GoogleAuthProvider();

export {auth, providor, db};