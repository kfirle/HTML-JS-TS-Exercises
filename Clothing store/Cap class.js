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
var Cap = /** @class */ (function (_super) {
    __extends(Cap, _super);
    function Cap(manufacturer, model, price, color, diameter, size, has_printing) {
        var _this = _super.call(this, manufacturer, model, price, color, diameter, size) || this;
        _this.has_printing = has_printing;
        return _this;
    }
    Object.defineProperty(Cap.prototype, "has_printing", {
        get: function () {
            return this._has_printing;
        },
        set: function (has_printing) {
            this._has_printing = has_printing;
        },
        enumerable: false,
        configurable: true
    });
    Cap.prototype.displayImage = function () {
        document.write("<img src='./pics/Cap.jpg'/><br/>");
    };
    Cap.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Has printing: " + this._has_printing + '<br/>');
    };
    return Cap;
}(Headware));
