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
var Outerware = /** @class */ (function (_super) {
    __extends(Outerware, _super);
    function Outerware(manufacturer, model, price, color, thickness, size) {
        var _this = _super.call(this, manufacturer, model, price) || this;
        _this.color = color;
        _this.thickness = thickness;
        _this.size = size;
        return _this;
    }
    Object.defineProperty(Outerware.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (str) {
            this._color = str;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Outerware.prototype, "thickness", {
        get: function () {
            return this._thickness;
        },
        set: function (num) {
            this._thickness = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Outerware.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (num) {
            this._size = num;
        },
        enumerable: false,
        configurable: true
    });
    Outerware.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Color: " + this._color + '<br/>');
        document.write("Thickness: " + this._thickness + '<br/>');
        document.write("Size: " + this._size + '<br/>');
    };
    return Outerware;
}(Product));
