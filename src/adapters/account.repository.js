import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import { NotFoundError } from '../core/index';

const accounts = [];
let nextAccountId = 1;

class AccountRepository {
    /**
     * Creates a new account and inserts it in to the database.
     * @param {Object} accountData minus the id
     * @return {Promise} A promise that returns the inserted account (including the id)
     */
    createAccount(accountData) {
        const account = Object.assign({}, accountData, { id: nextAccountId++ });
        accounts.push(account);
        return Promise.resolve(account);
    }

    /**
     * Updates an existing account.
     * @param {Object} accountData including the id
     * @return {Promise} A promise that returns the updated account (including the id)
     */
    updateAccount(accountData) {
        const account = find(accounts, ['id', accountData.id]);
        return account
            ? Promise.resolve(Object.assign(account, accountData))
            : Promise.reject(new NotFoundError());
    }

    /**
     * Gets an existing account.
     * @param {integer} id
     * @return {Promise} A promise that returns the desired account.
     */
    getAccount(id) {
        const account = find(accounts, ['id', id]);
        return account
            ? Promise.resolve(account)
            : Promise.reject(new NotFoundError());
    }

    /**
     * Gets all accounts.
     * @return {Promise} A promise that returns an array of all accounts.
     */
    getAccounts() {
        return Promise.resolve(accounts);
    }

    /**
     * Deletes an account.
     * @param {integer} id
     * @return {Promise} A promise that gets fulfilled when the account is deleted.
     */
    deleteAccount(id) {
        const index = findIndex(accounts, function(account) {
            return account.id === id;
        });
        return index >= 0
            ? Promise.resolve(accounts.splice(index, 1))
            : Promise.reject(new NotFoundError());
    }

    /**
     * Drops all account data.
     */
    dropData() {
        accounts.length = 0;
    }
}

const accountRepository = new AccountRepository();

export default accountRepository;
