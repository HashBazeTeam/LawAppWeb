/**
 * User collection related services
 */
import { UserModel, AgentModel } from "../models";
import { auth } from "./firebase";

/**
 * Admin user collection related services
 */
export const addAdmin = async (user) => {
  return await UserModel.addUser(user);
};

export const updateAdmin = async (userID, user) => {
  return await UserModel.updateUser(userID, user);
};

export const signOut = async () => {
  return await auth.signOut();
};

/**
 * Agent collection related services
 */
export const addAgent = async (agent) => {
  return await AgentModel.addAgent(agent);
};
