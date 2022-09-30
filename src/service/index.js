import axios from "lib/axios";
export const postLogin = async (value) => {
  return await axios.post("/login", value);
};

export const getTask = async () => {
  return await axios.get("/task");
};

export const postTask = async (newTask) => {
  return await axios.post("/task", newTask);
};

export const delTask = async (taskId) => {
  return await axios.delete(`/task/${taskId}`);
};

export const patchTask = async (taskId) => {
  return await axios.patch(`/task`, { taskId });
};
