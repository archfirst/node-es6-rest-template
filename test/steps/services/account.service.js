'use strict';

module.exports = {
    createAccount: createAccount,
    updateAccount: updateAccount,
    getAccount: getAccount,
    getAccounts: getAccounts,
    deleteAccount: deleteAccount
};

var axios = require('axios');
var api = require('../common/constants').api;

/**
 * Creates an account.
 *
 * @param {Account} account
 * @return {Promise<Account>}
 */
function createAccount(account) {

    return axios.post(api + '/accounts', account)
        .then(function(response) {
            return response.data;
        });
}

/**
 * Updates an account.
 *
 * @param {Account} account
 * @return {Promise<Account>}
 */
function updateAccount(account) {

    return axios.put(api + '/accounts/' + account.id, account)
        .then(function(response) {
            return response.data;
        });
}

/**
 * Gets an account
 *
 * @param {string} accountId
 * @return {Promise<Account>}
 */
function getAccount(accountId) {

    return axios.get(api + '/accounts/' + accountId)
        .then(function(response) {
            return response.data;
        });
}

/**
 * Gets all accounts
 *
 * @return {Promise<Account[]>}
 */
function getAccounts() {

    return axios.get(api + '/accounts')
        .then(function(response) {
            return response.data;
        });
}

/**
 * Deletes an account.
 *
 * @static
 * @param {string} accountId
 * @return {Promise<true>}
 */
function deleteAccount(accountId) {

    return axios.delete(api + '/accounts/' + accountId);
}
