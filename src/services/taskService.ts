import { Task } from '../models/Task';
import { createTask, getTasks, updateTask, deleteTask } from '../repositories/taskRepository';

export const addTask = async (task: Task): Promise<void> => {
  await createTask(task);
};

export const getUserTasks = async (userId: number): Promise<Task[]> => {
  return await getTasks(userId);
};

export const modifyTask = async (id: number, task: Partial<Task>): Promise<void> => {
  await updateTask(id, task);
};

export const removeTask = async (id: number): Promise<void> => {
  await deleteTask(id);
};
