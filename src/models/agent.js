/**
 * Agent model
 */
import {
  firestore,
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  getDoc
} from "src/services/firebase";

const collectionName = "Agent";

// Add agent to the Agent collection
export const addAgent = async (user) => {
  const userRef = doc(collection(firestore, collectionName));
  return await setDoc(userRef, {
    ...user,
    userID: userRef.id,
    createdAt: new Date(),
    isDeleted: false,
  });
};

// Update agent from the Agent collection
export const updateUser = async (userID, user) => {
  const userRef = doc(firestore, collectionName, userID);
  return await setDoc(userRef, user);
};

// Get all the agent from agent collection where the agent is not deleted
export const getAllAgents = async () => {
  const q = query(
    collection(firestore, collectionName),
    where("isDeleted", "!=", true)
  );
  const querySnapshot = await getDocs(q);
  let agents = [];
  querySnapshot.forEach((doc) => {
    agents.push(doc.data());
  });
  return agents;
};

// Get single agent account by userID
export const getAgentByID = async (userID) => {
  const userRef = doc(firestore, collectionName, userID);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
}
