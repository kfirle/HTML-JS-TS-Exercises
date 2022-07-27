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
var LadiesShirt = /** @class */ (function (_super) {
    __extends(LadiesShirt, _super);
    function LadiesShirt(manufacturer, model, price, color, sleeves_length, size, fabric) {
        var _this = _super.call(this, manufacturer, model, price, color, sleeves_length, size) || this;
        _this.fabric = fabric;
        return _this;
    }
    Object.defineProperty(LadiesShirt.prototype, "fabric", {
        get: function () {
            return this._fabric;
        },
        set: function (str) {
            this._fabric = str;
        },
        enumerable: false,
        configurable: true
    });
    LadiesShirt.prototype.displayImage = function () {
        document.write("<img src='./pics/LadiesShirt.jpg'/><br/>");
    };
    LadiesShirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Fabric: " + this._fabric + '<br/>');
    };
    return LadiesShirt;
}(Shirt));
