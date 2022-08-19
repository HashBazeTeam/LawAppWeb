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

const collectionName = "User";

// Add user to the User collection
export const addUser = async (user) => {
  const userRef = doc(collection(firestore, collectionName));
  return await setDoc(userRef, { ...user, userID: userRef.id });
};

// Update user from the user collection
export const updateUser = async (userID, user) => {
  const userRef = doc(firestore, collectionName, userID);
  return await setDoc(userRef, user);
};
