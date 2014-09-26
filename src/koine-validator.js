"use strinct";

(function (Koine) {
    Koine.Validator = {
        extend: function (methods) {
            for (var method in methods) {
                this[method] = methods[method];
            }
            return this;
        },
        isValid: function (value) {
        },
        processValidation: function (value) {

        }
    };

})(typeof(exports) === "undefined" ? (this.Koine || (this.Koine = {})) : exports);
