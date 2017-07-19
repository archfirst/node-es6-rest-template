Node ES6 REST Template
======================
The purpose of this template is to kick-start your Node.js projects using ES6. It implements best practices in developing RESTful APIs and Domain-Driven Design. Features include:
- Use of the [Hexagonal Architecture](http://alistair.cockburn.us/Hexagonal+architecture) to arrange the application into logical layers, with well-defined responsibilities.
- Use of BDD and [Specification-by-Example](http://specificationbyexample.com/) techniques for documenting application features. [Yadda](https://github.com/acuminous/yadda) is used for automated testing.
- RESTful APIs are implemented using the [Express](http://expressjs.com/) framework.
- Persistence is implemented using an in-memory repository layer. This can be substituted with any persistence technology of your choice.
- Logging and error handling are implemented using [Bunyan](https://github.com/trentm/node-bunyan).

Requirements
------------
- Install Node
    - on OSX, install [home brew](http://brew.sh/) and type `brew install node`
    - on Windows, use the installer available at [nodejs.org](http://nodejs.org/)

- Clone this repo

- Open a terminal (command line) window

- Type `npm install -g node-inspector node-gyp gulp bunyan`
    - node-gyp is required for `npm install` to succeed
    - bunyan is required for displaying the application log in a human readable format

Getting started (Dev Mode)
--------------------------
First make a copy of the sample environment file `.env-sample` to `.env`. Make any environment changes only in this copy. The `.env` file may vary for different environments (development, test, prod etc.) and should not be checked in to the repository. 

To run the application in development mode:
```bash
$ npm install
$ npm run watch
```

- `npm install` will install the required node libraries under `node_modules`. This needs to be run only once.
- `npm run watch` will start the application. It is designed for an efficient development process. As you make changes to the code, the application will restart to reflect the changes immediately. Also, Node.js is started with the `--inspect` flag so that debugging is turned on.

To verify that the application is working correctly, point your browser to [http://localhost:8080/v1/accounts](http://localhost:8080/v1/accounts) - you should see a response with a list of accounts in JSON format. Since the persistence layer is in memory, the list will be empty.

Running Lint
------------
To run ESLint on the `src` folder:

    $ npm run lint

To run ESLint on the `test` folder:

    $ npm run lint:test

Testing the application
-----------------------
- Make sure the server is running.
- In another shell, run acceptance tests using the following command

```bash
$ npm test
```

Building for production
-----------------------
When you want to deploy the application into production, run the following command:

```bash
$ npm run build
$ npm start
```

- `npm run build` compiles the ES6 code into the dist directory. This needs to be run only once.
- `npm start` runs the application from the dist directory.

You can also substitute the following command instead of `npm start` to avoid a dependency on npm:

    node dist/index.js | bunyan -o short

Folder Structure
----------------

### Highest Level Structure

```
/node_modules
/src
/dist
/test
```

- `node_modules:` Node.js modules downloaded by `npm install` (do not check in)
- `src:` contains all the ES6 source files for the RESTful server
- `dist:` contains the compiled version ready for distribution (do not check in)
- `test:` server tests

### Source Folder Structure

```
/src
    /adapters
    /app
    /core
```

The server folder contains sub-folders that arrange the application into logical layers as suggested by the [Hexagonal Architecture](http://alistair.cockburn.us/Hexagonal+architecture) (a.k.a. the [Onion Architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/)):

- The `adapter` layer *adapts* interactions from the external world to the application layer. This layer contains REST adapters as well as database repositories that allow the application layer to interact with the external world. Note that we are using in-memory persistence in the repositories. These can be easily modified to persist to a relational or NoSQL database.

- The `application` layer coordinates high-level activities such as creation of the domain objects and asking them to perform tasks requested by the external world.

- The `core` layer contains common application facilities such as logging and database initialization.

