var Dimensions = /** @class */ (function () {
    function Dimensions(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(Dimensions.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (num) {
            this._length = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dimensions.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (num) {
            this._width = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dimensions.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (num) {
            this._height = num;
        },
        enumerable: false,
        configurable: true
    });
    Dimensions.prototype.displayDetails = function () {
        document.write("Length: " + this._length + '<br/>');
        document.write("Width: " + this._width + '<br/>');
        document.write("Height: " + this._height + '<br/>');
    };
    return Dimensions;
}());
