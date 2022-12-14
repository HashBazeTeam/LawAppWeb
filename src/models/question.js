/**
 * Question model
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
  startAfter,
  limit,
  orderBy,
  endBefore,
  addDoc,
  storage,
  uploadBytes,
  ref,
  getDownloadURL,
  httpsCallable,
  functions,
} from "src/services/firebase";
import _ from "lodash";

const collectionName = "Question";

// Update question from the Question collection
export const updateQuestion = async (questionID, data) => {
  const docRef = doc(firestore, collectionName, questionID);
  return await updateDoc(docRef, data);
};

// Get all the question from question collection where the question is not deleted
export const getAllQuestions = async (
  status,
  limitCount,
  lastVisible,
  move
) => {
  let q;
  if (status && status != "") {
    if (lastVisible) {
      if (move == "next") {
        q = query(
          collection(firestore, collectionName),
          where("isDelete", "!=", true),
          where("status", "==", status),
          orderBy("isDelete", "desc"),
          // orderBy("status", "asc"),
          orderBy("postDateTime", "desc"),
          startAfter(lastVisible),
          limit(limitCount)
        );
      } else if (move == "previous") {
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
      } else if (move == "previous") {
        q = query(
          collection(firestore, collectionName),
          where("isDelete", "!=", true),
          orderBy("isDelete", "desc"),
          orderBy("postDateTime", "desc"),
          endBefore(lastVisible),
          limit(limitCount)
        );
      } else {
        q = query(
          collection(firestore, collectionName),
          where("isDelete", "!=", true),
          orderBy("isDelete", "desc"),
          orderBy("postDateTime", "desc"),
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
  const docRef = doc(firestore, "Stat", "Question");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    totalCount = docSnap.data().totalCount;
  } else {
    totalCount = 0;
  }

  return { questions, lastVisible: lastOne, totalCount };
};

// Get clients all questions
export const getClientQuestions = async (
  clientID,
  limitCount,
  lastVisible,
  move
) => {
  let q;
  if (clientID && clientID != "") {
    if (lastVisible) {
      if (move == "next") {
        q = query(
          collection(firestore, collectionName),
          where("isDelete", "!=", true),
          where("clientID", "==", clientID),
          orderBy("isDelete", "desc"),
          // orderBy("clientID", "asc"),
          orderBy("postDateTime", "desc"),
          startAfter(lastVisible),
          limit(limitCount)
        );
      } else {
        q = query(
          collection(firestore, collectionName),
          where("isDelete", "!=", true),
          where("clientID", "==", clientID),
          orderBy("isDelete", "desc"),
          // orderBy("clientID", "asc"),
          orderBy("postDateTime", "desc"),
          endBefore(lastVisible),
          limit(limitCount)
        );
      }
    } else {
      q = query(
        collection(firestore, collectionName),
        where("isDelete", "!=", true),
        where("clientID", "==", clientID),
        orderBy("isDelete", "desc"),
        // orderBy("clientID", "asc"),
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
  const docRef = doc(firestore, "Stat", "Question");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    totalCount = docSnap.data().totalCount;
  } else {
    totalCount = 0;
  }

  return { questions, lastVisible: lastOne, totalCount };
};

// Get single question account by userID
export const getQuestionByID = async (userID) => {
  const docRef = doc(firestore, collectionName, userID);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

// Get question insight
export const getQuestionInsight = async (status, fromDate, toDate) => {
  let q;
  if (status) {
    q = query(
      collection(firestore, collectionName),
      where("isDelete", "==", false),
      where("status", "==", status),
      where("postDateTime", ">=", fromDate),
      where("postDateTime", "<=", toDate),
      orderBy("postDateTime", "desc")
    );
  } else {
    q = query(
      collection(firestore, collectionName),
      where("isDelete", "==", false),
      where("postDateTime", ">=", fromDate),
      where("postDateTime", "<=", toDate),
      orderBy("postDateTime", "desc")
    );
  }

  const querySnapshot = await getDocs(q);
  let countryQuestions = {};
  querySnapshot.forEach((doc) => {
    const question = doc.data();
    if (countryQuestions[question.country]) {
      countryQuestions[question.country] += 1;
    } else {
      countryQuestions[question.country] = 1;
    }
  });
  return { countryQuestions };
};

/**
 * Chat related methods
 */

// Add chat to the question's chat sub collection
export const addChatToQuestion = async (questionID, data) => {
  const docRef = doc(
    firestore,
    collectionName,
    questionID,
    "chat",
    data.id.toString()
  );
  return await setDoc(docRef, data);
};

// Add image and file to the question's chat sub collection
export const addChatFileToQuestion = async (questionID, file, data) => {
  // TODO: Change the file name to a unique name and location
  const fileName = file.name + "#LawApp" + new Date().getTime();
  const storageRef = ref(storage, "chat-image", questionID, fileName);
  await uploadBytes(storageRef, file);
  const uploadData = { ...data, uri: await getDownloadURL(storageRef) };

  const docRef = doc(
    firestore,
    collectionName,
    questionID,
    "chat",
    data.id.toString()
  );

  return await setDoc(docRef, uploadData);
};

// Send notification when a new chat is added
export const sendChatNotification = async (fcmTokens, questionID) => {
  console.log(fcmTokens, questionID);
  try {
    const onNewChatFunc = httpsCallable(functions, "httpChatOnNewChatFunc");
    const res = await onNewChatFunc({ fcmTokens, questionID });
    return res;
  } catch (error) {
    console.log(error);
  }
};
