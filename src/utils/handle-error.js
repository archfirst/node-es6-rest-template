import { AppError } from './custom-errors';

export function handleError(res, error) {
    if (error instanceof AppError) {
        res.status(error.status).send({ message: error.message });
    } else {
        res.status(500).send({ message: error.message });
    }
}
