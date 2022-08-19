/**
 * User collection related services
 */
import { UserModel } from "../models";
import { auth } from "./firebase";

export const addAdmin = async (user) => {
  return await UserModel.addUser(user);
};

export const updateAdmin = async (userID, user) => {
  return await UserModel.updateUser(userID, user);
};

export const signOut = async () => {
  return await auth.signOut();
};
