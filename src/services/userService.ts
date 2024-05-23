import { findUserByUsername, createUser } from '../repositories/userRepository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (username: string, password: string): Promise<void> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(username, hashedPassword);
};

export const loginUser = async (username: string, password: string): Promise<string | null> => {
  const user = await findUserByUsername(username);
  if (user && await bcrypt.compare(password, user.password)) {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  }
  return null;
};
