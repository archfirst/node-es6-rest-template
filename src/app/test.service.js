import { accountRepository } from '../adapters';

export default class TestService {
    /**
     * Drops all data from all repositories.
     */
    dropData() {
        return accountRepository.dropData();
    }
}
