import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBJ-TXPL6V6EYmlr8YRNShaaleQoD1Bm-M",
  authDomain: "react-authentication-b21f3.firebaseapp.com",
  projectId: "react-authentication-b21f3",
  storageBucket: "react-authentication-b21f3.appspot.com",
  messagingSenderId: "191970273770",
  appId: "1:191970273770:web:c2b95f920490d65df6aa93",
  measurementId: "G-SYS1TTXBK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;