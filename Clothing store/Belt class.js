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
var BuckleMaterial;
(function (BuckleMaterial) {
    BuckleMaterial["steel"] = "steel";
    BuckleMaterial["leather"] = "leather";
    BuckleMaterial["fabric"] = "fabric";
    BuckleMaterial["plastic"] = "plastic";
})(BuckleMaterial || (BuckleMaterial = {}));
var Belt = /** @class */ (function (_super) {
    __extends(Belt, _super);
    function Belt(manufacturer, model, price, belt_color, buckle_color, buckle_material, dimensions) {
        var _this = _super.call(this, manufacturer, model, price) || this;
        _this.belt_color = belt_color;
        _this.buckle_color = buckle_color;
        _this.buckle_material = buckle_material;
        _this.dimensions = dimensions;
        return _this;
    }
    Object.defineProperty(Belt.prototype, "belt_color", {
        get: function () {
            return this._belt_color;
        },
        set: function (color) {
            this._belt_color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Belt.prototype, "buckle_color", {
        get: function () {
            return this._buckle_color;
        },
        set: function (color) {
            this._buckle_color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Belt.prototype, "buckle_material", {
        get: function () {
            return this._buckle_material;
        },
        set: function (material) {
            this._buckle_material = material;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Belt.prototype, "dimensions", {
        get: function () {
            return this._dimensions;
        },
        set: function (dimensions) {
            this._dimensions = dimensions;
        },
        enumerable: false,
        configurable: true
    });
    Belt.prototype.displayImage = function () {
        document.write("<img src='./pics/Belt.jpg'/><br/>");
    };
    Belt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Belt color: " + this._belt_color + '<br/>');
        document.write("Buckle color: " + this._buckle_color + '<br/>');
        document.write("Buckle material: " + this._buckle_material + '<br/>');
        this._dimensions.displayDetails();
    };
    return Belt;
}(Product));
