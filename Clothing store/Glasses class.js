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
var Glasses = /** @class */ (function (_super) {
    __extends(Glasses, _super);
    function Glasses(manufacturer, model, price, frame_color) {
        var _this = _super.call(this, manufacturer, model, price) || this;
        _this.frame_color = frame_color;
        return _this;
    }
    Object.defineProperty(Glasses.prototype, "frame_color", {
        get: function () {
            return this._frame_color;
        },
        set: function (str) {
            this._frame_color = str;
        },
        enumerable: false,
        configurable: true
    });
    Glasses.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Frame Color: " + this._frame_color + '<br/>');
    };
    return Glasses;
}(Product));
