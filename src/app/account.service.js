import { accountRepository } from '../adapters';

export default class AccountService {
    /**
     * Creates a new account and inserts it in to the database.
     * @param {Object} accountData minus the id
     * @return {Promise} A promise that returns the inserted account (including the id)
     */
    createAccount(accountData) {
        return accountRepository.createAccount(accountData);
    }

    /**
     * Updates an existing account.
     * @param {Object} accountData including the id
     * @return {Promise} A promise that returns the updated account (including the id)
     */
    updateAccount(accountData) {
        return accountRepository.updateAccount(accountData);
    }

    /**
     * Gets an existing account.
     * @param {integer} id
     * @return {Promise} A promise that returns the desired account.
     */
    getAccount(id) {
        return accountRepository.getAccount(id);
    }

    /**
     * Gets all accounts.
     * @return {Promise} A promise that returns an array of all accounts.
     */
    getAccounts() {
        return accountRepository.getAccounts();
    }

    /**
     * Deletes an account.
     * @param {integer} id
     * @return {Promise} A promise that gets fulfilled when the account is deleted.
     */
    deleteAccount(id) {
        return accountRepository.deleteAccount(id);
    }
}
