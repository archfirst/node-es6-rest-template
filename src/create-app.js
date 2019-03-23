import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { bookAdapter } from './adapters';

export function createApp() {
    // Create Express App
    const app = express();

    // Add middleware to enable CORS
    app.use(cors());

    // Add middleware to parse the POST data of the body
    app.use(bodyParser.urlencoded({ extended: true }));

    // Add middleware to parse application/json
    app.use(bodyParser.json());

    // Add routes
    bookAdapter.addRoutes(app);

    return app;
}
