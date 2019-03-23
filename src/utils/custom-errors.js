// Based on https://gist.github.com/slavafomin/b164e3e710a6fc9352c934b9073e7216

export class AppError extends Error {
    /**
     * Throws an application error
     * @param message
     * @param status - HTTP status (default 500)
     */
    constructor(message, status = 500) {
        super(message);

        // Save class name and status in properties
        // We can use any additional properties we want
        this.name = this.constructor.name;
        this.status = status;

        // Exclude our constructor from stack trace
        // (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export class NotFoundError extends AppError {
    constructor(message = 'Not Found') {
        super(message, 404);
    }
}
