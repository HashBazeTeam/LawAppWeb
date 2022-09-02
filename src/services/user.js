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

export const getAllAgents = async () => {
  return await AgentModel.getAllAgents();
}

export const getAgentByID = async (userID) => {
  return await AgentModel.getAgentByID(userID);
}

export const updateAgent = async (userID, agent) => {
  return await AgentModel.updateAgent(userID, agent);
}

export const deleteAgent = async (userID) => {
  return await AgentModel.deleteAgent(userID);
}
