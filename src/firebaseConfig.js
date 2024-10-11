// src/firebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { setLogLevel } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1grpLER14VSVB3I-SKV6go-H27-cPHy0",
  authDomain: "crminterno-cb54c.firebaseapp.com",
  projectId: "crminterno-cb54c",
  storageBucket: "crminterno-cb54c.appspot.com",
  messagingSenderId: "975556290807",
  appId: "1:975556290807:web:227c0e7b81831a07a74bf2"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

// Enable Firestore debug logging
setLogLevel('debug');

export { auth, db, app };