// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHR451BHQ7QAVaYIZ9c10NYsV-4tzOCpM",
  authDomain: "fit-with-rahat.firebaseapp.com",
  projectId: "fit-with-rahat",
  storageBucket: "fit-with-rahat.appspot.com",
  messagingSenderId: "1045025893150",
  appId: "1:1045025893150:web:4baf903d296a9c4dc4f70f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;