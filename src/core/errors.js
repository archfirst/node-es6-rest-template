// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types

// ----- NotFoundError -----
export function NotFoundError(message = 'Not Found') {
    this.name = 'NotFoundError';
    this.message = message;
    this.stack = new Error().stack;
}
NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;
