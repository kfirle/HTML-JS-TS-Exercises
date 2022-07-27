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
var FabricPants = /** @class */ (function (_super) {
    __extends(FabricPants, _super);
    function FabricPants(manufacturer, model, price, color, length, size, pockets) {
        var _this = _super.call(this, manufacturer, model, price, color, length, size) || this;
        _this.pockets = pockets;
        return _this;
    }
    Object.defineProperty(FabricPants.prototype, "pockets", {
        get: function () {
            return this._pockets;
        },
        set: function (num) {
            this._pockets = num;
        },
        enumerable: false,
        configurable: true
    });
    FabricPants.prototype.displayImage = function () {
        document.write("<img src='./pics/FabricPants.jpg'/><br/>");
    };
    FabricPants.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Pockets: " + this._pockets + '<br/>');
    };
    return FabricPants;
}(Pants));
