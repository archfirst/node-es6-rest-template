// -----------------------------------------------------------------------------
// Load environment variables from the .env file before doing anything else
// -----------------------------------------------------------------------------
import { config as envConfig } from 'dotenv';
envConfig();

// --- Remaining imports -----
import { createServer } from 'http';
import { createApp } from './create-app';

// -----------------------------------------------------------------------------
// Start the HTTP Server using the Express App
// -----------------------------------------------------------------------------
const port = 8080; // can be mapped using docker
const app = createApp();
const server = createServer(app);
server.listen(port, () => console.log('Listening on port ' + port));

// -----------------------------------------------------------------------------
// When SIGINT is received (i.e. Ctrl-C is pressed), shutdown services
// -----------------------------------------------------------------------------
process.on('SIGINT', () => {
    console.log('SIGINT received ...');
    console.log('Shutting down the server');

    server.close(() => {
        console.log('Server has been shutdown');
        console.log('Exiting process ...');
        process.exit(0);
    });
});
