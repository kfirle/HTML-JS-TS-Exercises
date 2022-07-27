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
var Jacket = /** @class */ (function (_super) {
    __extends(Jacket, _super);
    function Jacket(manufacturer, model, price, color, thickness, size, pockets) {
        var _this = _super.call(this, manufacturer, model, price, color, thickness, size) || this;
        _this.pockets = pockets;
        return _this;
    }
    Object.defineProperty(Jacket.prototype, "pockets", {
        get: function () {
            return this._pockets;
        },
        set: function (num) {
            this._pockets = num;
        },
        enumerable: false,
        configurable: true
    });
    Jacket.prototype.displayImage = function () {
        document.write("<img src='./pics/Jacket.jpg'/><br/>");
    };
    Jacket.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Pockets: " + this._pockets + '<br/>');
    };
    return Jacket;
}(Outerware));
