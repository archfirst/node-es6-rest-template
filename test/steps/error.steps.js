'use strict';

var Yadda = require('yadda');
var expect = require('./common/chai.helpers').expect;

var English = Yadda.localisation.English;

module.exports = English.library()

    .then('a $error error should be returned', function(error, next) {
        expect(this.ctx.error).to.equal(error);
        next();
    });
