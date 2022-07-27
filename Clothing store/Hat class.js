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
var Hat = /** @class */ (function (_super) {
    __extends(Hat, _super);
    function Hat(manufacturer, model, price, color, diameter, size, height) {
        var _this = _super.call(this, manufacturer, model, price, color, diameter, size) || this;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(Hat.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (num) {
            this._height = num;
        },
        enumerable: false,
        configurable: true
    });
    Hat.prototype.displayImage = function () {
        document.write("<img src='./pics/Hat.jpg'/><br/>");
    };
    Hat.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Height: " + this._height + '<br/>');
    };
    return Hat;
}(Headware));
