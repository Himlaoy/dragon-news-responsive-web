// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ_q_eycHPr5RTHWsODekvjopwzPILVLI",
  authDomain: "dragon-news-auth-5604b.firebaseapp.com",
  projectId: "dragon-news-auth-5604b",
  storageBucket: "dragon-news-auth-5604b.appspot.com",
  messagingSenderId: "311578331650",
  appId: "1:311578331650:web:bc064682dfc7a7d24fb51b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;