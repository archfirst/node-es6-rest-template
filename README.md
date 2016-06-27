# Node ES6 REST Template
The purpose of this template is to kick-start your Node.js projects using ES6. It implements best practices in developing RESTful APIs and Domain-Driven Design. Features include:
- Use of the [Hexagonal Architecture](http://alistair.cockburn.us/Hexagonal+architecture) to arrange the application into logical layers, with well-defined responsibilities.
- Use of BDD and [Specification-by-Example](http://specificationbyexample.com/) techniques for documenting application features. [Yadda](https://github.com/acuminous/yadda) is used for automated testing.
- RESTful APIs are implemented using the [Express](http://expressjs.com/) framework.
- Persistence is implemented using an in-memory repository layer. This can be substituted with any persistence technology of your choice.
- Logging and error handling are implemented using [Bunyan](https://github.com/trentm/node-bunyan).
- The build system is Gulp based – code changes are reflected in the server immediately.

## Requirements

- Install Node
    - on OSX, install [home brew](http://brew.sh/) and type `brew install node`
    - on Windows, use the installer available at [nodejs.org](http://nodejs.org/)

- Clone this repo

- Open a terminal (command line) window

- Type `npm install -g node-inspector node-gyp gulp bunyan`
    - node-gyp is required for `npm install` to succeed
    - bunyan is required for displaying the application log in a human readable format

## Quick Start
First make a copy of the sample environment file `.env-sample` to `.env`. Make any environment changes only in this copy. The `.env` file may vary for different environments (development, test, prod etc.) and should not be checked in to the repository. 

Now you can run the application:
```bash
$ npm install
$ npm start
```
- `npm install` will install the required node libraries under `node_modules`. This needs to be run only once.
- `npm start` will start the application. It is designed for an efficient development process. As you make changes to the code, the application will restart to reflect the changes immediately.

To verify that the application is working correctly, point your browser to [http://localhost:8080/accounts](http://localhost:8080/accounts) - you should see a response with a list of accounts in JSON format. Since the persistence layer is in memory, the list will be empty.

When you deploy the application to a production environment, run the following command to start it without using gulp:

    $ node dist/server.js | bunyan -o short

A better way to run the application in production is to start it using forever. This will automatically restart the application in case of a failure:

    $ forever start dist/server.js | bunyan -o short

To debug the application use node-debug (start node-debug on port 9090 because the application itself uses the default port 8080)

    $ node-debug --web-port 9090 dist/server.js | bunyan -o short

## Folder Structure

### Highest Level Structure

```
/node_modules
/src
/dist
/test
```

- `node_modules:` Node.js modules downloaded by `npm install` (do not check in)
- `server:` contains all the ES6 source files for the RESTful server
- `dist:` contains the compiled version ready for distribution (do not check in)
- `test:` server tests

### Source Folder Structure

```
/src
    /adapters
    /app
    /db
    /infrastructure
```

The server folder contains sub-folders that arrange the application into logical layers as suggested by the [Hexagonal Architecture](http://alistair.cockburn.us/Hexagonal+architecture) (a.k.a. the [Onion Architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/)):

- The `adapter` layer *adapts* interactions from the external world to the application layer. Currently this layer contains only the REST adapters that converts incoming HTTP messages to a format acceptable by the application layer.

- The `application` layer coordinates high-level activities such as creation of the domain objects and asking them to perform tasks requested by the external world.

- The `db` layer handles in-memory persistence using the repository pattern. This layer can be easily modified to persist to a relational or NoSQL database.

- The `infrastructure` layer contains common application facilities such as logging and database initialization.

## Tasks

### Compile

- `gulp build`

    Compiles the ES6 source to the `dist` directory.

### Test

- `gulp test`

    Runs all acceptance tests using yadda. Make sure the server is running in another shell.

### Run application in development mode

- `gulp serve`

    Runs the application in development mode. As you make changes to the code, the application will restart to reflect the changes immediately.

- `node-debug --web-port 9090 dist/server.js`

   Launch the application in debug mode.

### Run application in production mode

- `node dist/server.js | bunyan -o short`

You may use `forever` to automatically restart the application in case of a failure:

- `forever start dist/server.js | bunyan -o short`
