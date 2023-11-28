// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiQIDwx3L6dQSLRkb14lI6m1NEV8qUBZI",
  authDomain: "the-news-dragons-9fbe7.firebaseapp.com",
  projectId: "the-news-dragons-9fbe7",
  storageBucket: "the-news-dragons-9fbe7.appspot.com",
  messagingSenderId: "887421987928",
  appId: "1:887421987928:web:3d8e0de21934f0f131ae2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;