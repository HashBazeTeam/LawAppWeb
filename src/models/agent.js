/**
 * Agent model
 */
import { firestore, collection, doc, setDoc } from "src/services/firebase";

const collectionName = "Agent";

// Add agent to the Agent collection
export const addAgent = async (user) => {
  const userRef = doc(collection(firestore, collectionName));
  return await setDoc(userRef, {
    ...user,
    userID: userRef.id,
    createdAt: new Date(),
  });
};

// Update agent from the Agent collection
export const updateUser = async (userID, user) => {
  try {
    const userRef = doc(firestore, collectionName, userID);
    return await setDoc(userRef, user);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
