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
var Material;
(function (Material) {
    Material["fabric"] = "fabric";
    Material["leather"] = "lether";
    Material["zamsh"] = "zamsh";
})(Material || (Material = {}));
var ElegantShoes = /** @class */ (function (_super) {
    __extends(ElegantShoes, _super);
    function ElegantShoes(manufacturer, model, price, color, country, size, has_shoe_laces, material) {
        var _this = _super.call(this, manufacturer, model, price, color, country, size, has_shoe_laces) || this;
        _this.material = material;
        return _this;
    }
    Object.defineProperty(ElegantShoes.prototype, "material", {
        get: function () {
            return this._material;
        },
        set: function (material) {
            this._material = material;
        },
        enumerable: false,
        configurable: true
    });
    ElegantShoes.prototype.displayImage = function () {
        document.write("<img src='./pics/ElegantShoes.jpg'/><br/>");
    };
    ElegantShoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Material: " + this._material + '<br/>');
    };
    return ElegantShoes;
}(FlatShoes));
