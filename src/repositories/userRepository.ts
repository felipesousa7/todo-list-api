import pool from '../config/database';
import { User } from '../models/User';
import { RowDataPacket } from 'mysql2';

export const findUserByUsername = async (username: string): Promise<User | null> => {
  const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM users WHERE username = ?', [username]);
  if (rows.length > 0) {
    return rows[0] as User;
  }
  return null;
};

export const createUser = async (username: string, password: string): Promise<void> => {
  await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
};
