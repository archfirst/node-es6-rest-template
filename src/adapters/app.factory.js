import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
// import morgan from 'morgan';

import accountAdapter from './account.adapter';
import testAdapter from './test.adapter';

export default function createApp() {
    // Create Express App
    const app = express();

    // Add middleware to enable CORS
    app.use(cors());

    // Add middleware to parse the POST data of the body
    app.use(bodyParser.urlencoded({ extended: true }));

    // Add middleware to parse application/json
    app.use(bodyParser.json());

    // Add middleware to log requests
    // app.use(morgan('combined'));

    // Add routes
    app.post('/v1/accounts', accountAdapter.createAccount);
    app.put('/v1/accounts/:id', accountAdapter.updateAccount);
    app.get('/v1/accounts/:id', accountAdapter.getAccount);
    app.get('/v1/accounts', accountAdapter.getAccounts);
    app.delete('/v1/accounts/:id', accountAdapter.deleteAccount);

    app.delete('/v1/tests/:id', testAdapter.dropData);

    return app;
}
