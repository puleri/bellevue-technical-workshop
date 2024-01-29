import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZelX7J6TsB7d5K_XTiXExylA0ZSNgyiQ",
  authDomain: "bellevue-technical-workshop.firebaseapp.com",
  projectId: "bellevue-technical-workshop",
  storageBucket: "bellevue-technical-workshop.appspot.com",
  messagingSenderId: "76710554906",
  appId: "1:76710554906:web:84ce5546bb1af443a610a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const providor = new GoogleAuthProvider();

export {auth, providor, db};