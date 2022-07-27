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
var Headware = /** @class */ (function (_super) {
    __extends(Headware, _super);
    function Headware(manufacturer, model, price, color, diameter, size) {
        var _this = _super.call(this, manufacturer, model, price) || this;
        _this.color = color;
        _this.diameter = diameter;
        _this.size = size;
        return _this;
    }
    Object.defineProperty(Headware.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (str) {
            this._color = str;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Headware.prototype, "diameter", {
        get: function () {
            return this._diameter;
        },
        set: function (num) {
            this._diameter = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Headware.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (num) {
            this._size = num;
        },
        enumerable: false,
        configurable: true
    });
    Headware.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Color: " + this._color + '<br/>');
        document.write("Diameter: " + this._diameter + '<br/>');
        document.write("Size: " + this._size + '<br/>');
    };
    return Headware;
}(Product));
