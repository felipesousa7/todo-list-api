import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Lista de Tarefas',
    version: '1.0.0',
    description: 'Documentação da API para aplicação de Lista de Tarefas',
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description: 'Servidor de desenvolvimento',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default (app: Express): void => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
