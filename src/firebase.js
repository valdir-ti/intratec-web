import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const {
  REACT_APP_FIREBASE_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
  REACT_APP_VERCEL_FIREBASE_KEY,
  REACT_APP_VERCEL_FIREBASE_AUTH_DOMAIN,
  REACT_APP_VERCEL_DATABASE_URL,
  REACT_APP_VERCEL_PROJECT_ID,
  REACT_APP_VERCEL_STORAGE_BUCKET,
  REACT_APP_VERCEL_MESSAGING_SENDER_ID,
  REACT_APP_VERCEL_APP_ID,
  REACT_APP_VERCEL_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_KEY || REACT_APP_VERCEL_FIREBASE_KEY,
  authDomain:
    REACT_APP_FIREBASE_AUTH_DOMAIN || REACT_APP_VERCEL_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL || REACT_APP_VERCEL_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID || REACT_APP_VERCEL_PROJECT_ID,
  storageBucket:
    REACT_APP_FIREBASE_STORAGE_BUCKET || REACT_APP_VERCEL_STORAGE_BUCKET,
  messagingSenderId:
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID ||
    REACT_APP_VERCEL_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID || REACT_APP_VERCEL_APP_ID,
  measurementId:
    REACT_APP_FIREBASE_MEASUREMENT_ID || REACT_APP_VERCEL_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
