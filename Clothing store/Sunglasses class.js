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
var Sunglasses = /** @class */ (function (_super) {
    __extends(Sunglasses, _super);
    function Sunglasses(manufacturer, model, price, frame_color, glass_color) {
        var _this = _super.call(this, manufacturer, model, price, frame_color) || this;
        _this.glass_color = glass_color;
        return _this;
    }
    Object.defineProperty(Sunglasses.prototype, "glass_color", {
        get: function () {
            return this._glass_color;
        },
        set: function (str) {
            this._glass_color = str;
        },
        enumerable: false,
        configurable: true
    });
    Sunglasses.prototype.displayImage = function () {
        document.write("<img src='./pics/Sunglasses.jpg'/><br/>");
    };
    Sunglasses.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Glass_color: " + this._glass_color + '<br/>');
    };
    return Sunglasses;
}(Glasses));
