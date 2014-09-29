
var Koine = require('../src/koine-validator.js');

var UserValidator = function () {};

UserValidator.prototype = Koine.Validator.prototype;

UserValidator.prototype.processValidation = function (user) {
    if (!user.name) {
        this.getErrors().push('Invalid');
    }
};

describe("Koine.Validator", function () {
    var validator;
    var user;

    beforeEach(function () {
        validator = new UserValidator();
        user = null;
    });

    it("behaves like an abstract class", function () {
        expect(validator).not.toBe(null);
        expect(validator).not.toBeUndefined(null);
    });

    it("returns false when object is not valid but true when it is", function () {
        user = {};
        expect(validator.isValid(user)).toBeFalsy();

        user.name = "John Doe";
        expect(validator.isValid(user)).toBeTruthy();
    });
});

describe("Koine.Validator.Errors", function () {
    var errors;

    beforeEach(function () {
        errors = new Koine.Validator.Errors();
    });

    it("is initially empty", function () {
        expect(errors.isEmpty()).toBeTruthy();
    });

    it("isEmpty() returns either true or false", function () {
        expect(errors.isEmpty()).toBeTruthy();
        errors.add("field", "error");
        expect(errors.isEmpty()).toBeFalsy();
    });

    it("can add errors to the object", function () {
        errors.add("field", "message")
            .add("field", "message 2")
            .add("field2", "message");

        expect(errors.toJson()).toEqual({
            field: ["message", "message 2"],
            field2: ["message"]
        });
    });

    it("can empty error collection", function () {
        errors.add("some", "some message");

        expect(errors.clear().isEmpty()).toBeTruthy();
    });
});
