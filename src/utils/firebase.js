// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm3izOz0IDpNrep1bCai5j2sZZPRWGwyk",
  authDomain: "netflix-gpt-5581a.firebaseapp.com",
  projectId: "netflix-gpt-5581a",
  storageBucket: "netflix-gpt-5581a.appspot.com",
  messagingSenderId: "955281426025",
  appId: "1:955281426025:web:51234fd447f296bc79c4f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();