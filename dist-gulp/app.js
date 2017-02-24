"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by santosh on 2/24/17.
 */
var firstName = "Affixus ";
var middleName = "Systems ";
var lastName = " Pvt Ltd ";

console.log(firstName + " ::::: " + middleName + " :: " + lastName);

var Hello = function () {
    function Hello(height, width) {
        _classCallCheck(this, Hello);

        this.height = height;
        this.widht = width;
    }

    _createClass(Hello, [{
        key: "area",
        value: function area() {
            return this.height * this.widht;
        }
    }]);

    return Hello;
}();

var refobj = new Hello(23, 44);
console.log("AREA :: " + refobj.area());