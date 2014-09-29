Koine Validator
-----------------

Validator adapter for letting you use whathever awesome validation lib you want.


Code information:

[![Build Status](https://travis-ci.org/koinejs/Validator.png?branch=master)](https://travis-ci.org/koinejs/Validator)
[![Coverage Status](https://coveralls.io/repos/koinejs/Validator/badge.png?branch=master)](https://coveralls.io/r/koinejs/Validator?branch=master)
[![Code Climate](https://codeclimate.com/github/koinejs/Validator.png)](https://codeclimate.com/github/koinejs/Validator)

Package information:

[![Dependency Status](https://gemnasium.com/koinejs/Validator.png)](https://gemnasium.com/koinejs/Validator)


### Usage

In order to create a validator, extend the ```executeValidation``` method:

```javascript

var UserValidation = function () {};
UserValidator.prototype = Koine.Validator.prototype;
UserValidator.prototype = Koine.Validator.prototype.executeValidation = function (value) {
        if (!value['name']) {
            this.getErrors().add('name', 'you must set name');
        }

        if (!value['lastName']) {
            this.getErrors().add('lastName', 'you must set last name');
        }
    };

var user = { name: 'Jon', lastName: '' };

var validator = new UserValidator();


validator.isValid(user); // false

validator.getErrors();
// { lastName: ['last name cannot be empty'] }

user.lastName = 'Doe';

validator.isValid(user); // true
```

### Installing

@TODO

### Issues/Features proposals

[Here](https://github.com/koinejs/Validator/issues) is the issue tracker.

## Contributing

Please refer to the [contribuiting guide](https://github.com/koinejs/Validator/blob/master/CONTRIBUTING.md).

### Lincense
[MIT](MIT-LICENSE)

### Authors

- [Marcelo Jacobus](https://github.com/mjacobus)
