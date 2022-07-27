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
var ComfortShoes = /** @class */ (function (_super) {
    __extends(ComfortShoes, _super);
    function ComfortShoes(manufacturer, model, price, color, country, size, has_shoe_laces, has_foothold) {
        var _this = _super.call(this, manufacturer, model, price, color, country, size, has_shoe_laces) || this;
        _this.has_foothold = has_foothold;
        return _this;
    }
    Object.defineProperty(ComfortShoes.prototype, "has_foothold", {
        get: function () {
            return this._has_foothold;
        },
        set: function (material) {
            this._has_foothold = material;
        },
        enumerable: false,
        configurable: true
    });
    ComfortShoes.prototype.displayImage = function () {
        document.write("<img src='./pics/ComfortShoes.jpg'/><br/>");
    };
    ComfortShoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Has foothold: " + this._has_foothold + '<br/>');
    };
    return ComfortShoes;
}(FlatShoes));
