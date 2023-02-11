// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// luu file
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// end  luu file
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBavZvyEW9vRwjzKE4gzxzBjeAzrXkXCf4",
  authDomain: "web-vmac.firebaseapp.com",
  projectId: "web-vmac",
  storageBucket: "web-vmac.appspot.com",
  messagingSenderId: "53739274118",
  appId: "1:53739274118:web:c5713dd142cadd78367607"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

