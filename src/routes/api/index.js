import express from 'express';
import { booksRouter } from './books';

export const apiRouter = express.Router();
apiRouter.use('/books', booksRouter);
