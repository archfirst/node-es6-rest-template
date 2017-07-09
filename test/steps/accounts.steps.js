'use strict';

var Yadda = require('yadda');
var expect = require('./common/chai.helpers').expect;
var accountService = require('./services/account.service');

var English = Yadda.localisation.English;
var Dictionary = Yadda.Dictionary;

var dictionary = new Dictionary()
    .define('table', /([^\u0000]*)/, Yadda.converters.table);

module.exports = English.library(dictionary)

    .given('an account called $accountName', function(accountName, next) {
        var self = this;

        accountService.createAccount({ name: accountName })
            .then(function(account) {
                self.ctx.account = account;
                next();
            });
    })

    .when('I create an account called $accountName', function(accountName, next) {
        var self = this;

        accountService.createAccount({ name: accountName })
            .then(function(account) {
                self.ctx.account = account;
                next();
            });
    })

    .when('I change the account name to $accountName', function(accountName, next) {
        var self = this;

        self.ctx.account.name = accountName;
        accountService.updateAccount(self.ctx.account)
            .then(function(account) {
                self.ctx.account = account;
                next();
            });
    })

    .when('I ask for the account', function(next) {
        var self = this;

        accountService.getAccount(self.ctx.account.id)
            .then(function(account) {
                self.ctx.account = account;
                next();
            })
            .catch(function(error) {
                self.ctx.error = error.response.status.toString();
                next();
            });
    })

    .when('I delete the account', function(next) {
        accountService.deleteAccount(this.ctx.account.id)
            .then(function() {
                next();
            });
    })

    .then ('I should get the account called $accountName', function(accountName, next) {
        expect(this.ctx.error).to.be.undefined;
        expect(this.ctx.account).to.exist;
        expect(this.ctx.account.name).to.equal(accountName);
        next();
    });
