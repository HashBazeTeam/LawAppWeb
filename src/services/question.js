/**
 * Question collection related services
 */
 import { QuestionModel } from "../models";
 
 export const getAllQuestions = async (status, limit=20, lastVisible, move) => {
   return await QuestionModel.getAllQuestions(status, limit, lastVisible, move);
 }

export const addChatToQuestion = async (questionID, chat) => {
  return await QuestionModel.addChatToQuestion(questionID, chat);
};
 