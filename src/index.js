// -----------------------------------------------------------------------------
// Load environment variables from the .env file before doing anything else
// -----------------------------------------------------------------------------
import { config as envConfig } from 'dotenv';
envConfig();

// --- Remaining imports -----
import { createServer } from 'http';
import { createApp } from './adapters';
import { log } from './core';

// -----------------------------------------------------------------------------
// Start the HTTP Server using the Express App
// -----------------------------------------------------------------------------
const port = process.env.SERVER_PORT;
const app = createApp();
const server = createServer(app);
server.listen(port, () => log.info('Listening on port ' + port));

// -----------------------------------------------------------------------------
// When SIGINT is received (i.e. Ctrl-C is pressed), shutdown services
// -----------------------------------------------------------------------------
process.on('SIGINT', () => {
    log.info('SIGINT received ...');
    log.info('Shutting down the server');

    server.close(() => {
        log.info('Server has been shutdown');
        log.info('Exiting process ...');
        process.exit(0);
    });
});
