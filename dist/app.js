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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiZmlyc3ROYW1lIiwibWlkZGxlTmFtZSIsImxhc3ROYW1lIiwiY29uc29sZSIsImxvZyIsIkhlbGxvIiwiaGVpZ2h0Iiwid2lkdGgiLCJ3aWRodCIsInJlZm9iaiIsImFyZWEiLCJ0ZW1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0FBR0EsSUFBSUEsWUFBWSxVQUFoQjtBQUNBLElBQUlDLGFBQWEsVUFBakI7QUFDQSxJQUFJQyxXQUFXLFdBQWY7O0FBR0FDLFFBQVFDLEdBQVIsQ0FBWUosWUFBWSxTQUFaLEdBQXdCQyxVQUF4QixHQUFxQyxNQUFyQyxHQUE4Q0MsUUFBMUQ7O0lBSU1HLEs7QUFDRixtQkFBWUMsTUFBWixFQUFxQkMsS0FBckIsRUFBMkI7QUFBQTs7QUFDdkIsYUFBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsYUFBS0UsS0FBTCxHQUFhRCxLQUFiO0FBQ0g7Ozs7K0JBRU07QUFDSCxtQkFBTyxLQUFLRCxNQUFMLEdBQWMsS0FBS0UsS0FBMUI7QUFDSDs7Ozs7O0FBSUwsSUFBSUMsU0FBUyxJQUFJSixLQUFKLENBQVUsRUFBVixFQUFjLEVBQWQsQ0FBYjtBQUNBRixRQUFRQyxHQUFSLENBQWEsYUFBYUssT0FBT0MsSUFBUCxFQUExQjs7QUFFQSxJQUFJQyxpSEFHc0JYLFNBSHRCLHNCQUdnRFMsT0FBT0MsSUFBUCxFQUhwRDs7QUFNQVAsUUFBUUMsR0FBUixDQUFZTyxJQUFaO0FBQ0FSLFFBQVFDLEdBQVIsQ0FBWU8sSUFBWiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgc2FudG9zaCBvbiAyLzI0LzE3LlxuICovXG5sZXQgZmlyc3ROYW1lID0gXCJBZmZpeHVzIFwiO1xubGV0IG1pZGRsZU5hbWUgPSBcIlN5c3RlbXMgXCI7XG5sZXQgbGFzdE5hbWUgPSBcIiBQdnQgTHRkIFwiO1xuXG5cbmNvbnNvbGUubG9nKGZpcnN0TmFtZSArIFwiIDo6Ojo6IFwiICsgbWlkZGxlTmFtZSArIFwiIDo6IFwiICsgbGFzdE5hbWUpO1xuXG5cblxuY2xhc3MgSGVsbG97XG4gICAgY29uc3RydWN0b3IoaGVpZ2h0ICwgd2lkdGgpe1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy53aWRodCA9IHdpZHRoO1xuICAgIH1cblxuICAgIGFyZWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlaWdodCAqIHRoaXMud2lkaHQ7XG4gICAgfVxufVxuXG5cbmxldCByZWZvYmogPSBuZXcgSGVsbG8oMjMsIDQ0KTtcbmNvbnNvbGUubG9nKCBcIkFSRUEgOjogXCIgKyByZWZvYmouYXJlYSgpKTtcblxubGV0IHRlbXAgPSBgSGVsbG8gdGVtcGxhdGVcbmFkZmFkZmFkc2YgYWZhZHNmYXNkZmFzZCBmYWRzZmFzZGZkc2FmYXNmYWRzZlxuYWZhZGZhZGZkZmFmXG5hZmRmYWRzZmRhZmFkZmFzZiBhZmFmZCAke2ZpcnN0TmFtZX0gIGFmZGFmZiBhZmFmICR7cmVmb2JqLmFyZWEoKX1gO1xuXG5cbmNvbnNvbGUubG9nKHRlbXApO1xuY29uc29sZS5sb2codGVtcCk7Il19