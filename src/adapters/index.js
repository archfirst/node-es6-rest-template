import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
// import morgan from 'morgan';

import AccountAdapter from './account.adapter';
import TestAdapter from './test.adapter';

// Create Express App
export var app = express();

// Add middleware to enable CORS
app.use(cors());

// Add middleware to parse the POST data of the body
app.use(bodyParser.urlencoded({extended: true}));

// Add middleware to parse application/json
app.use(bodyParser.json());

// Add middleware to log requests
// app.use(morgan('combined'));

// Create adapters and add routes
// Note that the bind methods return wrapper methods that bind "this" to the adapter when the call is made.
let accountAdapter = new AccountAdapter();
app.post('/v1/accounts', accountAdapter.createAccount.bind(accountAdapter));
app.put('/v1/accounts/:id', accountAdapter.updateAccount.bind(accountAdapter));
app.get('/v1/accounts/:id', accountAdapter.getAccount.bind(accountAdapter));
app.get('/v1/accounts', accountAdapter.getAccounts.bind(accountAdapter));
app.delete('/v1/accounts/:id', accountAdapter.deleteAccount.bind(accountAdapter));

let testAdapter = new TestAdapter();
app.delete('/v1/tests/:id', testAdapter.dropData.bind(testAdapter));
