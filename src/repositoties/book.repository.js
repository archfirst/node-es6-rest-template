import { NotFoundError } from '../utils';

const books = [
    {
        id: 'design-patterns',
        name: 'Design Patterns - Elements of Reusable Object-Oriented Software'
    },
    {
        id: 'refactoring',
        name: 'Refactoring - Improving the Design of Existing Code'
    },
    {
        id: 'domain-driven-design',
        name: 'Domain-Driven Design'
    },
    {
        id: 'clean-code',
        name: 'Clean Code - A Handbook of Agile Software Craftsmanship'
    },
    {
        id: 'agile-software-development',
        name: 'Agile Software Development, Principles, Patterns, and Practices'
    }
];

function getBook(id) {
    const book = books.find(book => book.id === id);
    return book ? Promise.resolve(book) : Promise.reject(new NotFoundError());
}

function getBooks() {
    return Promise.resolve(books);
}

export const bookRepository = {
    getBook,
    getBooks
};
