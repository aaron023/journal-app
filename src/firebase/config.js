// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW5VTyDZX_lDpr_jxbr6cwd2vSNMstXlQ",
  authDomain: "react-cursos-ea88b.firebaseapp.com",
  projectId: "react-cursos-ea88b",
  storageBucket: "react-cursos-ea88b.appspot.com",
  messagingSenderId: "539529238039",
  appId: "1:539529238039:web:813e88b0ebbff08dacee52"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);