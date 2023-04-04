import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDB1VFGgAEqP8bT0zEhrYmBMRfcgg-PMeo",
  authDomain: "learning-platform-58f5c.firebaseapp.com",
  projectId: "learning-platform-58f5c",
  storageBucket: "learning-platform-58f5c.appspot.com",
  messagingSenderId: "90126887599",
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export const courses = collection(db, "courses");
export const lessons = collection(db, "lessons");
