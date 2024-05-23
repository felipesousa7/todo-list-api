import { Router } from 'express';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/taskController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.use(authMiddleware);

/**
 * @swagger
 * components:
 *   schemas:
 *     Tarefa:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         id:
 *           type: integer
 *           description: O ID auto-gerado da tarefa
 *         title:
 *           type: string
 *           description: O título da tarefa
 *         description:
 *           type: string
 *           description: A descrição da tarefa
 *         completed:
 *           type: boolean
 *           description: O status da tarefa
 *       example:
 *         id: 1
 *         title: Comprar mantimentos
 *         description: Preciso comprar leite e ovos
 *         completed: false
 */

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     tags: [Tarefas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tarefa'
 *     responses:
 *       201:
 *         description: A tarefa foi criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarefa'
 *       500:
 *         description: Erro no servidor
 */
router.post('/tasks', createTask);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retorna a lista de todas as tarefas
 *     tags: [Tarefas]
 *     responses:
 *       200:
 *         description: A lista de tarefas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefa'
 */
router.get('/tasks', getTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualiza a tarefa pelo ID
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O ID da tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tarefa'
 *     responses:
 *       200:
 *         description: A tarefa foi atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarefa'
 *       404:
 *         description: A tarefa não foi encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/tasks/:id', updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Remove a tarefa pelo ID
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O ID da tarefa
 *     responses:
 *       200:
 *         description: A tarefa foi removida com sucesso
 *       404:
 *         description: A tarefa não foi encontrada
 *       500:
 *         description: Erro no servidor
 */
router.delete('/tasks/:id', deleteTask);

export default router;
