/**
 * User model
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
  updateDoc,
  httpsCallable, 
  functions
} from "src/services/firebase";

const collectionName = "User";

// Add user to the User collection
export const addUser = async (user) => {
  const userRef = doc(collection(firestore, collectionName));
  return await setDoc(userRef, {
    ...user,
    userID: userRef.id,
    createdAt: new Date(),
    isDeleted: false,
    role: "Admin",
  });
};

// Update user from the User collection
export const updateUser = async (userID, user) => {
  const userRef = doc(firestore, collectionName, userID);
  return await updateDoc(userRef, user);
};

// Get all the user from user collection where the user is not deleted
export const getAllUsers = async () => {
  const q = query(
    collection(firestore, collectionName),
    where("isDeleted", "!=", true),
    where("role", "==", "Admin")
  );
  const querySnapshot = await getDocs(q);
  let agents = [];
  querySnapshot.forEach((doc) => {
    agents.push(doc.data());
  });
  return agents;
};

// Get single user account by userID
export const getUserByID = async (userID) => {
  const userRef = doc(firestore, collectionName, userID);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

// Get single user account by phone number
export const getUserByPhoneNumber = async (phoneNumber) => {
  const q = query(
    collection(firestore, collectionName),
    where("phoneNumber", "==", phoneNumber)
  );
  const querySnapshot = await getDocs(q);
  let user = [];
  querySnapshot.forEach((doc) => {
    user.push(doc.data());
  });
  if (user.length == 1) {
    return user[0];
  } else if (user.length > 1) {
    console.log("More than one user with the same phone number");
    return null;
  } else {
    return null;
  }
};

// Delete user account by userID
export const deleteUser = async (userID) => {
  const userRef = doc(firestore, collectionName, userID);
  return await updateDoc(userRef, {
    isDeleted: true,
  });
};

// On login user firebase cloud function
export const onLoginFunction = async (phoneNumber) => {
  const onLoginFunc = httpsCallable(functions, 'httpUserOnLoginFunc');
  const result = await onLoginFunc({ phoneNumber });
  if (result) {
    return result.data;
  } else {
    return null;
  }
}
