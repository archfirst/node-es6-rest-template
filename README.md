# Node ES6 REST Template

The purpose of this template is to kick-start your Node.js projects using ES6. It implements best practices in developing RESTful APIs and Domain-Driven Design. Features include:

-   Use of the [Hexagonal Architecture](http://alistair.cockburn.us/Hexagonal+architecture) to arrange the application into logical layers, with well-defined responsibilities.
-   RESTful APIs are implemented using the [Express](http://expressjs.com/) framework.
-   Persistence is implemented using an in-memory repository layer. This can be substituted with any persistence technology of your choice.

## Dev Build

```bash
$ npm install
$ npm start
```

To verify that the application is working correctly, point your browser to [http://localhost:8080/api/books](http://localhost:8080/api/books) - you should see a response with a list of books in JSON format.

## Production Build

```bash
$ npm run build
$ npm serve
```

## Folder Structure

```
/src
    /adapters
    /services
    /repositories
```

The source folder contains sub-folders that arrange the application into logical layers as suggested by the [Hexagonal Architecture](http://alistair.cockburn.us/Hexagonal+architecture) (a.k.a. the [Onion Architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/)):

-   The `adapter` layer _adapts_ interactions from the external world to the service layer. This layer contains REST adapters.

-   The `service` layer coordinates high-level activities such as creation of domain objects and asking them to perform tasks requested by the external world. It interacts with the repository layer to save and restore objects.

-   The `repository` layer is responsible for persisting domain objects and performing CRUD operations on them. Note that this implementation uses in-memory persistence but it can be easily modified to use a relational or NoSQL database for persistence.
