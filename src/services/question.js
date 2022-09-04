/**
 * Question collection related services
 */
 import { QuestionModel } from "../models";
 
 export const getAllQuestions = async (status, limit=20, lastVisible, move) => {
   return await QuestionModel.getAllQuestions(status, limit, lastVisible, move);
 }
 