import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { rootRouter } from './routes';
import { AppError } from './utils';

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
    app.use(rootRouter);

    // Add application error handler
    app.use(appErrorHandler);

    return app;
}

function appErrorHandler(err, req, res, next) {
    if (err instanceof AppError) {
        res.status(err.status).send({ error: err.message });
    } else if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' });
    } else {
        next(err);
    }
}
