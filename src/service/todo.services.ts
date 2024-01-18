import NotFoundError from "../error/notFoundError";
import { Itask } from "../interface/task";
import taskeModel from "../model/todo.model";

export const createTask = async (profileData: Itask) => {
  await taskeModel.createTask(profileData);
  return {
    profile: profileData,
    message: "Profile created succeesfully",
  };
};

export const getAllTask = async () => {
  console.log("hello1");
  return await taskeModel.getAllTask();
};
