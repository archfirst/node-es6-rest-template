import { testService } from '../app';

class TestAdapter {
    /**
     * Deletes all data if the id matches.
     * *** DON'T EXPOSE SUCH A SERVICE IN A PRODUCTION APP ***
     *
     * @param {Object} req - req.params.id contains the magic id = 1234
     * @param {Object} res - res.body contains no content
     */
    dropData = (req, res) => {
        const id = parseInt(req.params.id);
        if (id !== 1234) {
            res.status(500).send({ message: 'Unauthorized' });
        }

        testService.dropData();
        res.status(204).send(); // No Content
    };
}

const testAdapter = new TestAdapter();

export default testAdapter;
