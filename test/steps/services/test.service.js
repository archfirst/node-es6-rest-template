'use strict';

module.exports = {
    dropData: dropData
};

var axios = require('axios');
var api = require('../common/constants').api;

/**
 * Drop all data on the server.
 */
function dropData() {

    var magicId = 1234;

    return axios.delete(api + '/tests/' + magicId);
}
