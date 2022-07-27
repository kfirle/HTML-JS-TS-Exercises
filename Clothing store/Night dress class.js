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
var NightDress = /** @class */ (function (_super) {
    __extends(NightDress, _super);
    function NightDress(manufacturer, model, price, color, measurement, size, length, is_bare, fabric) {
        var _this = _super.call(this, manufacturer, model, price, color, measurement, size, length, is_bare) || this;
        _this.fabric = fabric;
        return _this;
    }
    Object.defineProperty(NightDress.prototype, "fabric", {
        get: function () {
            return this._fabric;
        },
        set: function (str) {
            this._fabric = str;
        },
        enumerable: false,
        configurable: true
    });
    NightDress.prototype.displayImage = function () {
        document.write("<img src='./pics/NightDress.jpg'/><br/>");
    };
    NightDress.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Fabric: " + this._fabric + '<br/>');
    };
    return NightDress;
}(Dress));
