import { bookService } from '../services';
import { handleError } from '../utils';

function getBook(req, res) {
    const { id } = req.params;

    bookService
        .getBook(id)
        .then(book => {
            res.send(book);
        })
        .catch(error => {
            handleError(res, error);
        });
}

function getBooks(req, res) {
    bookService
        .getBooks()
        .then(books => {
            res.send(books);
        })
        .catch(error => {
            handleError(res, error);
        });
}

function addRoutes(app) {
    app.get('/api/books/:id', getBook);
    app.get('/api/books', getBooks);
}

export const bookAdapter = {
    addRoutes
};
