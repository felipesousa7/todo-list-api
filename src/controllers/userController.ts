import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/userService';

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    await registerUser(username, password);
    res.status(201).send('Usuário registrado com sucesso!');
  } catch (error) {
    res.status(500).send('Erro ao registrar usuário.');
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const token = await loginUser(username, password);
    if (token) {
      res.status(200).json({ token });
    } else {
      res.status(401).send('Credenciais invalidas.');
    }
  } catch (error) {
    res.status(500).send('Erro ao realizar o login.');
  }
};
