import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  getTaskRequest,
  deleteTaskRequest,
  getSingleTask,
  updateTaskRequest,
} from "../api/task";

const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [task, setTask] = useState([]);

  const getTask = async () => {
    try {
      const res = await getTaskRequest();
      setTask(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 204) setTask(task.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const selectTask = async (id) => {
    try {
      const res = await getSingleTask(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, task) => {
    try {
      await updateTaskRequest(id, task);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TaskContext.Provider
      value={{
        task,
        createTask,
        getTask,
        deleteTask,
        selectTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
