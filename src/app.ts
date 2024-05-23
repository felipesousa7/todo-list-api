import express from 'express';
import dotenv from 'dotenv';
import swaggerSetup from './swagger';

import cors from 'cors';
import userRoutes from './routes/userRoutes';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

const app = express();

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
  exposedHeaders: 'Authorization',
};

app.use(cors(corsOptions));

app.use(express.json());

swaggerSetup(app);

app.use('/api/users', userRoutes);
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
