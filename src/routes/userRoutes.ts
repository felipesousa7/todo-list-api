import { Router } from 'express';
import { register, login } from '../controllers/userController';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuário:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: O ID auto-gerado do usuário
 *         username:
 *           type: string
 *           description: O nome de usuário
 *         password:
 *           type: string
 *           description: A senha do usuário
 *       example:
 *         id: 1
 *         username: johndoe
 *         password: senha123
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuário'
 *     responses:
 *       201:
 *         description: O usuário foi registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuário'
 *       500:
 *         description: Erro no servidor
 */
router.post('/register', register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login de um usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuário'
 *     responses:
 *       200:
 *         description: O usuário foi logado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuário'
 *       500:
 *         description: Erro no servidor
 */
router.post('/login', login);

export default router;
