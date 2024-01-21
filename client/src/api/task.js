import axios from "./axios";

export const getTaskRequest = () => axios.get("/task");

export const getSingleTask = (id) => axios.get(`/task/${id}`);

export const createTaskRequest = (task) => axios.post("/add-task", task);

export const updateTaskRequest = (id, task) => axios.put(`/task/${id}`, task);

export const deleteTaskRequest = (id) => axios.delete(`/task/${id}`);