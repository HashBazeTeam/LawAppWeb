/**
 * User model
 */
import {
  firestore,
  addDoc,
  collection,
  doc,
  setDoc,
} from "src/services/firebase";

/**
 * User interface
 */
export interface User {
  userID: string;
  email?: string;
  role: string;
  fullName: string;
  country: string;
  dob?: string;
  phoneNumber: string;
  fcmToken?: string;
}

const collectionName = "User";

// Add user to the User collection
export const addUser = async (user: any) => {
  const userRef = doc(collection(firestore, collectionName));
  return await setDoc(userRef, { ...user, userID: userRef.id });
};

// Update user from the user collection
export const updateUser = async (userID: string, user: any) => {
  const userRef = doc(firestore, collectionName, userID);
  return await setDoc(userRef, user);
};
