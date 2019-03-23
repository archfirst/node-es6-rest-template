import { bookRepository } from '../repositoties';

function getBook(id) {
    return bookRepository.getBook(id);
}

function getBooks() {
    return bookRepository.getBooks();
}

export const bookService = {
    getBook,
    getBooks
};
