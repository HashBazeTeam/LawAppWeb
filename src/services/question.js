/**
 * Question collection related services
 */
 import { QuestionModel } from "../models";
 
 export const getAllQuestions = async (status, limit=20, lastVisible, move) => {
   return await QuestionModel.getAllQuestions(status, limit, lastVisible, move);
 }

 export const getClientQuestion = async (clientID, limit=20, lastVisible, move) => {
  return await QuestionModel.getClientQuestions(clientID, limit, lastVisible, move);
}

export const addChatToQuestion = async (questionID, chat) => {
  return await QuestionModel.addChatToQuestion(questionID, chat);
};

export const addChatFileToQuestion = async (questionID, file, chat) => {
  return await QuestionModel.addChatFileToQuestion(questionID, file, chat);
}

export const updateQuestion = async (questionID, data) => {
  return await QuestionModel.updateQuestion(questionID, data);
}
 