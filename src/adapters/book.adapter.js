import { bookService } from '../services';

function getBooks(req, res) {
    bookService
        .getBooks()
        .then(books => {
            res.send(books);
        })
        .catch(error => {
            res.status(500).send({ message: error.message });
        });
}

export const bookAdapter = {
    getBooks
};
