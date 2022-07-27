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
var SkirtType;
(function (SkirtType) {
    SkirtType["Short"] = "Short";
    SkirtType["Long"] = "Long";
})(SkirtType || (SkirtType = {}));
var Skirt = /** @class */ (function (_super) {
    __extends(Skirt, _super);
    function Skirt(manufacturer, model, price, color, measurement, size, type) {
        var _this = _super.call(this, manufacturer, model, price, color, measurement, size) || this;
        _this.type = type;
        return _this;
    }
    Object.defineProperty(Skirt.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: false,
        configurable: true
    });
    Skirt.prototype.displayImage = function () {
        document.write("<img src='./pics/Skirt.jpg'/><br/>");
    };
    Skirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Type: " + this._type + '<br/>');
    };
    return Skirt;
}(WomenDress));
