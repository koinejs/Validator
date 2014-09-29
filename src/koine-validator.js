(function (Koine) {
    "use strinct";

    /**
     * Errors Validator
     * Responsible for abstracting some validations
     */
    Koine.Validator = function () {};

    /**
     * Process validation
     */
    Koine.Validator.prototype.processValidation = function (value) {
        throw new Error("Not inplemented");
    };

    /**
     * Process validation
     * @param mixed value
     * @return boolean
     */
    Koine.Validator.prototype.isValid = function (value) {
        this.getErrors().clear();

        this.processValidation(value);

        return this.getErrors().length === 0;
    };

    /**
     * Get the collection of errors
     * @return Koine.Validator.Errors
     */
    Koine.Validator.prototype.getErrors = function () {
        this._errors = this._errors || new Koine.Validator.Errors();

        return this._errors;
    }

    /**
     * Errors Class
     * Responsible for keeping track of errors
     */
    Koine.Validator.Errors = function () {};

    /**
     * Verifies if the error collection is empty
     * @return boolean
     */
    Koine.Validator.Errors.prototype.isEmpty = function () {
        for (var prop in this._errors) {
            return false;
        }

        return true;
    };

    /**
     * Add error by key
     * @param string key
     * @param string message
     * @return self
     */
    Koine.Validator.Errors.prototype.add = function (key, message) {
        this._errors      = this._errors || {}
        this._errors[key] = this._errors[key] || [];
        this._errors[key].push(message);

        return this;
    };

    /**
     * Converts errors to json
     * @return json
     */
    Koine.Validator.Errors.prototype.toJson = function () {
        return this._errors;
    };

    /**
     * Clear errors
     * @return boolean
     */
    Koine.Validator.Errors.prototype.clear = function () {
        this._errors = {};
        for(var prop in this._errors) {
            delete this._errors[prop];
        }

        return this;
    };

})(typeof(exports) === "undefined" ? (this.Koine || (this.Koine = {})) : exports);
