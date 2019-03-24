import express from 'express';
import asyncHandler from 'express-async-handler';
import { bookService } from '../../services';

export const booksRouter = express.Router();

// Get all books
booksRouter.get(
    '/',
    asyncHandler(async (req, res) => {
        const books = await bookService.getBooks();
        res.send(books);
    })
);

// Get one book
booksRouter.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const book = await bookService.getBook(id);
        res.send(book);
    })
);
