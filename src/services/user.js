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

export const getAllAdmins = async () => {
  return await UserModel.getAllUsers();
}

export const getAdminByID = async (userID) => {
  return await UserModel.getUserByID(userID);
}

export const getAdminByPhoneNumber = async (phoneNumber) => {
  return await UserModel.getUserByPhoneNumber(phoneNumber);
}

export const deleteAdmin = async (userID) => {
  return await UserModel.deleteUser(userID);
}

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
