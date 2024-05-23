import pool from '../config/database';
import { Task } from '../models/Task';
import { RowDataPacket } from 'mysql2';

export const createTask = async (task: Task): Promise<void> => {
  await pool.query('INSERT INTO tasks (userId, title, description, completed, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)', 
    [task.userId, task.title, task.description, task.completed, new Date(), new Date()]);
};

export const getTasks = async (userId: number): Promise<Task[]> => {
  const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM tasks WHERE userId = ?', [userId]);
  return rows as Task[];
};

export const updateTask = async (id: number, task: Partial<Task>): Promise<void> => {
  const { title, description, completed } = task;
  await pool.query('UPDATE tasks SET title = ?, description = ?, completed = ?, updatedAt = ? WHERE id = ?', 
    [title, description, completed, new Date(), id]);
};

export const deleteTask = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
};
