// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkgR9NMJ3BRwsNmFW-CWPMLij86Hrlkss",
  authDomain: "day-light-news.firebaseapp.com",
  projectId: "day-light-news",
  storageBucket: "day-light-news.appspot.com",
  messagingSenderId: "522076507850",
  appId: "1:522076507850:web:8d98ccdf4237fc219e6e33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;