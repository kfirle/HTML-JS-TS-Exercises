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
var WomenDress = /** @class */ (function (_super) {
    __extends(WomenDress, _super);
    function WomenDress(manufacturer, model, price, color, measurement, size) {
        var _this = _super.call(this, manufacturer, model, price) || this;
        _this.color = color;
        _this.measurement = measurement;
        _this.size = size;
        return _this;
    }
    Object.defineProperty(WomenDress.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (str) {
            this._color = str;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WomenDress.prototype, "measurement", {
        get: function () {
            return this._measurement;
        },
        set: function (num) {
            this._measurement = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WomenDress.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (num) {
            this._size = num;
        },
        enumerable: false,
        configurable: true
    });
    WomenDress.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Color: " + this._color + '<br/>');
        document.write("Measurement: " + this._measurement + '<br/>');
        document.write("Size: " + this._size + '<br/>');
    };
    return WomenDress;
}(Product));
