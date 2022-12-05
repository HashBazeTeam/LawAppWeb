// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE__PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE__STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE__MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE__APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

/**
 * Authentication
 */
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const auth = getAuth(firebaseApp);
auth.languageCode = "en";
// auth.settings.appVerificationDisabledForTesting = true;

const appVerifier = () => {
  return new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onSignInSubmit();
      },
    },
    auth
  );
};

export { auth, signInWithPhoneNumber, appVerifier };

/**
 * Firestore
 */
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  query,
  where,
  getDoc,
  getDocs,
  Timestamp,
  limit,
  orderBy,
  startAfter,
  endBefore,
  onSnapshot,
} from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

export {
  firestore,
  collection,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  query,
  where,
  getDoc,
  getDocs,
  Timestamp,
  limit,
  orderBy,
  startAfter,
  endBefore,
  onSnapshot,
};

// Convert firestore Timestamp to date
export function convertFirestoreTimeStampToDate(date) {
  return new Date(Timestamp.fromMillis(date.seconds * 1000).toDate());
}

/**
 * Firebase storage
 */
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage(firebaseApp);

export { storage, ref, uploadBytes, getDownloadURL };

/**
 * Firebase functions
 */
import { getFunctions, httpsCallable } from "firebase/functions";
const functions = getFunctions(firebaseApp);

export { functions, httpsCallable };

/**
 * FCM Messaging
 */
import { getMessaging, getToken, onMessage, requestPermissio} from "firebase/messaging";

const messaging = getMessaging(firebaseApp);


export { messaging, onMessage, getToken };
