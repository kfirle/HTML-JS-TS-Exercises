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
var FlatShoes = /** @class */ (function (_super) {
    __extends(FlatShoes, _super);
    function FlatShoes(manufacturer, model, price, color, country, size, has_shoe_laces) {
        var _this = _super.call(this, manufacturer, model, price, color, country, size) || this;
        _this.has_shoe_laces = has_shoe_laces;
        return _this;
    }
    Object.defineProperty(FlatShoes.prototype, "has_shoe_laces", {
        get: function () {
            return this._has_shoe_laces;
        },
        set: function (has_shoe_laces) {
            this._has_shoe_laces = has_shoe_laces;
        },
        enumerable: false,
        configurable: true
    });
    FlatShoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Has Laces: " + this._has_shoe_laces + '<br/>');
    };
    return FlatShoes;
}(Shoes));
