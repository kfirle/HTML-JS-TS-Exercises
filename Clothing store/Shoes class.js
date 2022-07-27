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
var Shoes = /** @class */ (function (_super) {
    __extends(Shoes, _super);
    function Shoes(manufacturer, model, price, color, country, size) {
        var _this = _super.call(this, manufacturer, model, price) || this;
        _this.color = color;
        _this.country = country;
        _this.size = size;
        return _this;
    }
    Object.defineProperty(Shoes.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (str) {
            this._color = str;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shoes.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (str) {
            this._country = str;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shoes.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (num) {
            this._size = num;
        },
        enumerable: false,
        configurable: true
    });
    Shoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Color: " + this._color + '<br/>');
        document.write("Country: " + this._country + '<br/>');
        document.write("Size: " + this._size + '<br/>');
    };
    return Shoes;
}(Product));
