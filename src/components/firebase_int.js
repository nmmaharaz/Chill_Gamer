import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDmAY0ZRXq0GeHanMyu2q7n6bu54il-IlM",
  authDomain: "chill-game-8b0b0.firebaseapp.com",
  projectId: "chill-game-8b0b0",
  storageBucket: "chill-game-8b0b0.firebasestorage.app",
  messagingSenderId: "1071819111972",
  appId: "1:1071819111972:web:e9b34da5daacb0d557e2b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth