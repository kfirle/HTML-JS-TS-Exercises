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
var SportShoes = /** @class */ (function (_super) {
    __extends(SportShoes, _super);
    function SportShoes(manufacturer, model, price, color, country, size, has_shoe_laces, prod_date) {
        var _this = _super.call(this, manufacturer, model, price, color, country, size, has_shoe_laces) || this;
        _this.prod_date = prod_date;
        return _this;
    }
    Object.defineProperty(SportShoes.prototype, "prod_date", {
        get: function () {
            return this._prod_date;
        },
        set: function (material) {
            this._prod_date = material;
        },
        enumerable: false,
        configurable: true
    });
    SportShoes.prototype.displayImage = function () {
        document.write("<img src='./pics/SportShoes.jpg'/><br/>");
    };
    SportShoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Prod date: " + this._prod_date + '<br/>');
    };
    return SportShoes;
}(FlatShoes));
