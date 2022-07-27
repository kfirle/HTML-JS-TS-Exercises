var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Object.defineProperty(Shape.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (format) {
            this._format = format;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        var _this = _super.call(this) || this;
        _this.length = length;
        return _this;
    }
    Object.defineProperty(Square.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (num) {
            this._length = num;
        },
        enumerable: false,
        configurable: true
    });
    Square.prototype.print_area_perimeter = function () {
        var perimeter = this._length * 4;
        var area = this._length * this._length;
        document.write("Square Permimeter: " + perimeter + '<br/>');
        document.write("Square Area: " + area);
    };
    Square.prototype.print = function () {
        for (var y = 1; y <= this._length; y++) {
            for (var x = 1; x <= this._length; x++) {
                this.format.printCell(x, y, this._length, this._length, this._length);
            }
            document.write('<br/>');
        }
        document.write('<br/>');
    };
    return Square;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(height, width) {
        var _this = _super.call(this) || this;
        _this.height = height;
        _this.width = width;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (num) {
            this._height = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (num) {
            this._width = num;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.print_area_perimeter = function () {
        var perimeter = (this._height + this._width) * 2;
        var area = this._height * this._width;
        document.write("Rectangle Permimeter: " + perimeter + '<br/>');
        document.write("Rectangle Area: " + area);
    };
    Rectangle.prototype.print = function () {
        for (var y = 1; y <= this._height; y++) {
            for (var x = 1; x <= this._width; x++) {
                this.format.printCell(x, y, this._width, this._height, this._width);
            }
            document.write('<br/>');
        }
        document.write('<br/>');
    };
    return Rectangle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(length) {
        var _this = _super.call(this) || this;
        _this._length = length;
        return _this;
    }
    Object.defineProperty(Triangle.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (num) {
            this._length = num;
        },
        enumerable: false,
        configurable: true
    });
    Triangle.prototype.print_area_perimeter = function () {
        var hypotenuse = Math.sqrt(2 * Math.pow(this._length, 2));
        var perimeter = this._length * 2 + hypotenuse;
        var area = this._length * this._length / 2;
        document.write("Triangle Permimeter: " + perimeter + '<br/>');
        document.write("Triangle Area: " + area);
    };
    Triangle.prototype.print = function () {
        for (var y = 1; y <= this._length; y++) {
            for (var x = 1; x <= y; x++) {
                this.format.printCell(x, y, y, this._length, this._length);
            }
            document.write('<br/>');
        }
        document.write('<br/>');
    };
    return Triangle;
}(Shape));
