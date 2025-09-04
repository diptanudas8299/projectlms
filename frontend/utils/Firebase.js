import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
   authDomain: "loginvirtualcourses-f5f03.firebaseapp.com",
  projectId: "loginvirtualcourses-f5f03",
  storageBucket: "loginvirtualcourses-f5f03.firebasestorage.app",
  messagingSenderId: "1007771180472",
  appId: "1:1007771180472:web:fae5dfae6a86486baac34d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}