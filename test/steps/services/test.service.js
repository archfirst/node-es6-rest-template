'use strict';

module.exports = {
    dropData: dropData
};

var api = require('../common/constants').api;
var request = require('./request');

/**
 * Drop all data on the server.
 */
function dropData() {

    var magicId = 1234;

    return request.del(api + '/tests/' + magicId)
        .endAsync();
}
