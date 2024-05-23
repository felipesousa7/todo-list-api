import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    res.status(401).send('Acesso negado! O token não foi enviado.');
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as User;
    req.user = decoded; // Adicionando a propriedade user ao objeto Request
    next();
  } catch (error) {
    res.status(400).send('Token inválido!');
  }
};
