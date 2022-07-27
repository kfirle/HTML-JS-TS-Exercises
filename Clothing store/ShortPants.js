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
var ShortPants = /** @class */ (function (_super) {
    __extends(ShortPants, _super);
    function ShortPants(manufacturer, model, price, color, length, size, fabric_type) {
        var _this = _super.call(this, manufacturer, model, price, color, length, size) || this;
        _this.fabric_type = fabric_type;
        return _this;
    }
    Object.defineProperty(ShortPants.prototype, "fabric_type", {
        get: function () {
            return this._fabric_type;
        },
        set: function (str) {
            this._fabric_type = str;
        },
        enumerable: false,
        configurable: true
    });
    ShortPants.prototype.displayImage = function () {
        document.write("<img src='./pics/ShortPants.jpg'/><br/>");
    };
    ShortPants.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Fabric type: " + this._fabric_type + '<br/>');
    };
    return ShortPants;
}(Pants));
