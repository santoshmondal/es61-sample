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

var temp = "Hello template\nadfadfadsf afadsfasdfasd fadsfasdfdsafasfadsf\nafadfadfdfaf\nafdfadsfdafadfasf afafd " + firstName + "  afdaff afaf " + refobj.area();

console.log(temp);
console.log(temp);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJmaXJzdE5hbWUiLCJtaWRkbGVOYW1lIiwibGFzdE5hbWUiLCJjb25zb2xlIiwibG9nIiwiSGVsbG8iLCJoZWlnaHQiLCJ3aWR0aCIsIndpZGh0IiwicmVmb2JqIiwiYXJlYSIsInRlbXAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFHQSxJQUFJQSxZQUFZLFVBQWhCO0FBQ0EsSUFBSUMsYUFBYSxVQUFqQjtBQUNBLElBQUlDLFdBQVcsV0FBZjs7QUFHQUMsUUFBUUMsR0FBUixDQUFZSixZQUFZLFNBQVosR0FBd0JDLFVBQXhCLEdBQXFDLE1BQXJDLEdBQThDQyxRQUExRDs7SUFJTUcsSztBQUNGLG1CQUFZQyxNQUFaLEVBQXFCQyxLQUFyQixFQUEyQjtBQUFBOztBQUN2QixhQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxhQUFLRSxLQUFMLEdBQWFELEtBQWI7QUFDSDs7OzsrQkFFTTtBQUNILG1CQUFPLEtBQUtELE1BQUwsR0FBYyxLQUFLRSxLQUExQjtBQUNIOzs7Ozs7QUFJTCxJQUFJQyxTQUFTLElBQUlKLEtBQUosQ0FBVSxFQUFWLEVBQWMsRUFBZCxDQUFiO0FBQ0FGLFFBQVFDLEdBQVIsQ0FBYSxhQUFhSyxPQUFPQyxJQUFQLEVBQTFCOztBQUVBLElBQUlDLGlIQUdzQlgsU0FIdEIsc0JBR2dEUyxPQUFPQyxJQUFQLEVBSHBEOztBQU1BUCxRQUFRQyxHQUFSLENBQVlPLElBQVo7QUFDQVIsUUFBUUMsR0FBUixDQUFZTyxJQUFaIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBzYW50b3NoIG9uIDIvMjQvMTcuXG4gKi9cbmxldCBmaXJzdE5hbWUgPSBcIkFmZml4dXMgXCI7XG5sZXQgbWlkZGxlTmFtZSA9IFwiU3lzdGVtcyBcIjtcbmxldCBsYXN0TmFtZSA9IFwiIFB2dCBMdGQgXCI7XG5cblxuY29uc29sZS5sb2coZmlyc3ROYW1lICsgXCIgOjo6OjogXCIgKyBtaWRkbGVOYW1lICsgXCIgOjogXCIgKyBsYXN0TmFtZSk7XG5cblxuXG5jbGFzcyBIZWxsb3tcbiAgICBjb25zdHJ1Y3RvcihoZWlnaHQgLCB3aWR0aCl7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLndpZGh0ID0gd2lkdGg7XG4gICAgfVxuXG4gICAgYXJlYSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy53aWRodDtcbiAgICB9XG59XG5cblxubGV0IHJlZm9iaiA9IG5ldyBIZWxsbygyMywgNDQpO1xuY29uc29sZS5sb2coIFwiQVJFQSA6OiBcIiArIHJlZm9iai5hcmVhKCkpO1xuXG5sZXQgdGVtcCA9IGBIZWxsbyB0ZW1wbGF0ZVxuYWRmYWRmYWRzZiBhZmFkc2Zhc2RmYXNkIGZhZHNmYXNkZmRzYWZhc2ZhZHNmXG5hZmFkZmFkZmRmYWZcbmFmZGZhZHNmZGFmYWRmYXNmIGFmYWZkICR7Zmlyc3ROYW1lfSAgYWZkYWZmIGFmYWYgJHtyZWZvYmouYXJlYSgpfWA7XG5cblxuY29uc29sZS5sb2codGVtcCk7XG5jb25zb2xlLmxvZyh0ZW1wKTsiXX0=