'use strict';

module.exports = {
    formatHttpError: formatHttpError
};

var http = require('http');

function formatHttpError(err) {
    return err.status + ' ' + http.STATUS_CODES[err.status];
}
