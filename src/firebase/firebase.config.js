// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrmACcYHTYUck45wyvDLgNXvSqy4spprQ",
  authDomain: "travel-buzz-bd.firebaseapp.com",
  projectId: "travel-buzz-bd",
  storageBucket: "travel-buzz-bd.appspot.com",
  messagingSenderId: "648238684866",
  appId: "1:648238684866:web:72f55f270f32d30d8c795b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;