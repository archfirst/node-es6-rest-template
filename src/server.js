// -----------------------------------------------------------------------------
// Load environment variables from the .env file before doing anything else
// -----------------------------------------------------------------------------
import * as dotenv from 'dotenv';
dotenv.config();

// --- Remaining imports -----
import * as http from 'http';
import { app } from './adapters';
import { log } from './infrastructure';

// -----------------------------------------------------------------------------
// Start the HTTP Server using the Express App
// -----------------------------------------------------------------------------
var port = process.env.SERVER_PORT;
var server = http.createServer(app);
server.listen(port, () => log.info('Listening on port ' + port));

// -----------------------------------------------------------------------------
// Stop the HTTP server and the database when SIGINT is received
// (i.e. Ctrl-C is pressed)
// -----------------------------------------------------------------------------
process.on('SIGINT', () => {
    log.info('SIGINT received ...');

    server.close(() => {
        log.info('Server stopped ...');
        log.info('Exiting process ...');
        process.exit();
    });
});
