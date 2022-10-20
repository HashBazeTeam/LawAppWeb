import {ConfigModel} from "../models";

export const updateConfig = async (id, value) => {
  return await ConfigModel.updateConfig(id, value);
};

export const getAllConfigs = async () => {
  return await ConfigModel.getAllConfigs();
};
