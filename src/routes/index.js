import express from 'express';
import { apiRouter } from './api';

export const rootRouter = express.Router();
rootRouter.use('/api', apiRouter);
