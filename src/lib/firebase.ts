
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3sT4F1M4xPQvRgBou_oeaatJygISvpfk",
  authDomain: "local-cricket-app-20420.firebaseapp.com",
  projectId: "local-cricket-app-20420",
  storageBucket: "local-cricket-app-20420.appspot.com", // Fixed the storage bucket URL
  messagingSenderId: "182481594796",
  appId: "1:182481594796:web:e10d22d671876b6a66f209",
  measurementId: "G-MGE9CF8C7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;
