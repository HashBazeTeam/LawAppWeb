/**
 * Question model
 */
import { endBefore } from "firebase/firestore";
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
  startAfter,
  limit,
  orderBy,
} from "src/services/firebase";

const collectionName = "Question";

// Update question from the Question collection
export const updateQuestion = async (questionID, data) => {
  const userRef = doc(firestore, collectionName, questionID);
  return await updateDoc(userRef, data);
};

// Get all the question from question collection where the question is not deleted
export const getAllQuestions = async (status, limitCount, lastVisible, move) => {
  let q;
  if (status && status != "") {
    if (lastVisible) {
      if (move == "next") {
        q = query(
          collection(firestore, collectionName),
          where("isDelete", "!=", true),
          where("status", "==", status),
          orderBy("isDelete", "desc"),
          orderBy("status", "asc"),
          orderBy("postDateTime", "desc"),
          startAfter(lastVisible),
          limit(limitCount)
        );
      } else {
        q = query(
          collection(firestore, collectionName),
          where("isDelete", "!=", true),
          where("status", "==", status),
          orderBy("isDelete", "desc"),
          orderBy("status", "asc"),
          orderBy("postDateTime", "desc"),
          endBefore(lastVisible),
          limit(limitCount)
        );
      }
      
    } else {
      q = query(
        collection(firestore, collectionName),
        where("isDelete", "!=", true),
        where("status", "==", status),
        orderBy("isDelete", "desc"),
        orderBy("status", "asc"),
        orderBy("postDateTime", "desc"),
        limit(limitCount)
      );
    }
  } else {
    if (lastVisible) {
      if (move == "next") {
        q = query(
          collection(firestore, collectionName),
          where("isDelete", "!=", true),
          orderBy("isDelete", "desc"),
          orderBy("postDateTime", "desc"),
          startAfter(lastVisible),
          limit(limitCount)
        );
      } else {
        q = query(
          collection(firestore, collectionName),
          where("isDelete", "!=", true),
          orderBy("isDelete", "desc"),
          orderBy("postDateTime", "desc"),
          endBefore(lastVisible),
          limit(limitCount)
        );
      }
      
    } else {
      q = query(
        collection(firestore, collectionName),
        where("isDelete", "!=", true),
        orderBy("isDelete", "desc"),
        orderBy("postDateTime", "desc"),
        limit(limitCount)
      );
    }
  }

  const querySnapshot = await getDocs(q);
  const lastOne = querySnapshot.docs[querySnapshot.docs.length - 1];

  let questions = [];
  querySnapshot.forEach((doc) => {
    questions.push(doc.data());
  });

  // Get question totalCount
  let totalCount = 0;
  const userRef = doc(firestore, "Stat", "Question");
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    totalCount = docSnap.data().totalCount;
  } else {
    totalCount = 0;
  }

  return { questions, lastVisible: lastOne, totalCount };
};

// Get single question account by userID
export const getQuestionByID = async (userID) => {
  const userRef = doc(firestore, collectionName, userID);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};
