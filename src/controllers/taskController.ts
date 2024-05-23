import { Request, Response } from 'express';
import { addTask, getUserTasks, modifyTask, removeTask } from '../services/taskService';
import { Task } from '../models/Task';

import { User } from '../models/User';

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}

export const createTask = async (req: Request, res: Response): Promise<void> => {
  const task: Task = req.body;
  if (req.user) {
    task.userId = req.user.id;
  } else {
    res.status(401).send('Usuário não autenticado.');
    return;
  }
  
  try {
    await addTask(task);
    res.status(201).send('Tarefa Criada com sucesso!');
  } catch (error) {
    res.status(500).send('Erro ao criar tarefa.');
  }
};

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  if (!req.user) {
    res.status(401).send('Usuário não autenticado.');
    return;
  }

  try {
    const tasks = await getUserTasks(req.user.id);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send('Erro ao buscar as tarefas.');
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const task: Partial<Task> = req.body;

  if (!req.user) {
    res.status(401).send('Usuário não autenticado.');
    return;
  }

  try {
    await modifyTask(Number(id), task);
    res.status(200).send('Tarefa editada com sucesso!');
  } catch (error) {
    res.status(500).send('Erro ao editar tarefa.');
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  if (!req.user) {
    res.status(401).send('Usuário não autenticado.');
    return;
  }

  try {
    await removeTask(Number(id));
    res.status(200).send('Tarefa deletada com sucesso!');
  } catch (error) {
    res.status(500).send('Erro ao deletar tarefa.');
  }
};
