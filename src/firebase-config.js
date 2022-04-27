// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkXAWs4yIhXiQkW94W_FzsMxoCWqu1KXg",
  authDomain: "blogg-e7a16.firebaseapp.com",
  projectId: "blogg-e7a16",
  storageBucket: "blogg-e7a16.appspot.com",
  messagingSenderId: "229448422257",
  appId: "1:229448422257:web:46f34c3d5c2eb64d1b1cd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

//authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();