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
    getDoc,
    updateDoc
  } from "src/services/firebase";
  
  const collectionName = "Config";
  
  
  // Update config from the Config collection
  export const updateConfig = async (value) => {
    const userRef = doc(firestore, collectionName, 'basic');
    return await updateDoc(userRef, value);
  };
  
  // Get all the configs from the COnfig collection
  export const getAllConfigs = async () => {
    const dataRef = doc(firestore, collectionName, 'basic');
  const docSnap = await getDoc(dataRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
  };
  