"use strict";

var Koine = require('../src/koine-validator.js');

var UserValidator = Koine.Validator.extend({
    processValidation: function (value) {

    }
});

describe("Koine.Validator", function () {
    var validator;
    var user;

    beforeEach(function () {
        validator = Koine;
        user = null;
    });

    it("behaves like an abstract class", function () {
        expect(validator).not.toBe(null);
        expect(validator).not.toBeUndefined(null);
    });

    it("returns false when object is not valid", function () {
        user = {};
        expect(validator.isValid(user)).toBeFalsy();
    });
});
