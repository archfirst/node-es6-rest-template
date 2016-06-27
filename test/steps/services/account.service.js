'use strict';

module.exports = {
    createAccount: createAccount,
    updateAccount: updateAccount,
    getAccount: getAccount,
    getAccounts: getAccounts,
    deleteAccount: deleteAccount
};

var api = require('../common/constants').api;
var request = require('./request');

/**
 * Creates an account.
 *
 * @param {Account} account
 * @return {Promise<Account>}
 */
function createAccount(account) {

    return request.post(api + '/accounts')
        .send(account)
        .endAsync()
        .then(function(res) {
            return res.body;
        });
}

/**
 * Updates an account.
 *
 * @param {Account} account
 * @return {Promise<Account>}
 */
function updateAccount(account) {

    return request.put(api + '/accounts/' + account.id)
        .send(account)
        .endAsync()
        .then(function(res) {
            return res.body;
        });
}

/**
 * Gets an account
 *
 * @param {string} accountId
 * @return {Promise<Account>}
 */
function getAccount(accountId) {

    return request.get(api + '/accounts/' + accountId)
        .endAsync()
        .then(function(res) {
            return res.body;
        });
}

/**
 * Gets all accounts
 *
 * @return {Promise<Account[]>}
 */
function getAccounts() {

    return request.get(api + '/accounts')
        .endAsync()
        .then(function(res) {
            return res.body;
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

    return request.del(api + '/accounts/' + accountId)
        .endAsync();
}
