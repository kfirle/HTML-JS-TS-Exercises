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
var Coat = /** @class */ (function (_super) {
    __extends(Coat, _super);
    function Coat(manufacturer, model, price, color, thickness, size, is_rain_coat) {
        var _this = _super.call(this, manufacturer, model, price, color, thickness, size) || this;
        _this.is_rain_coat = is_rain_coat;
        return _this;
    }
    Object.defineProperty(Coat.prototype, "is_rain_coat", {
        get: function () {
            return this._is_rain_coat;
        },
        set: function (is_rain_coat) {
            this._is_rain_coat = is_rain_coat;
        },
        enumerable: false,
        configurable: true
    });
    Coat.prototype.displayImage = function () {
        document.write("<img src='./pics/Coat.jpg'/><br/>");
    };
    Coat.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Is rain coat: " + this._is_rain_coat + '<br/>');
    };
    return Coat;
}(Outerware));
