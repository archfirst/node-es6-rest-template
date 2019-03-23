import { bookRepository } from '../repositoties';

function getBooks() {
    return bookRepository.getBooks();
}

export const bookService = {
    getBooks
};
