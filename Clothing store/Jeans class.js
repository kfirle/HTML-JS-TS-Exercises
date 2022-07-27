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
var Jeans = /** @class */ (function (_super) {
    __extends(Jeans, _super);
    function Jeans(manufacturer, model, price, color, length, size, has_tears) {
        var _this = _super.call(this, manufacturer, model, price, color, length, size) || this;
        _this.has_tears = has_tears;
        return _this;
    }
    Object.defineProperty(Jeans.prototype, "has_tears", {
        get: function () {
            return this._has_tears;
        },
        set: function (has_tears) {
            this._has_tears = has_tears;
        },
        enumerable: false,
        configurable: true
    });
    Jeans.prototype.displayImage = function () {
        document.write("<img src='./pics/Jeans.jpg'/><br/>");
    };
    Jeans.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Has tears: " + this._has_tears + '<br/>');
    };
    return Jeans;
}(Pants));
