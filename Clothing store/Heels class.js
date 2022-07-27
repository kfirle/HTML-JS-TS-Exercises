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
var HeelsType;
(function (HeelsType) {
    HeelsType["low"] = "low";
    HeelsType["medium"] = "medium";
    HeelsType["high"] = "high";
})(HeelsType || (HeelsType = {}));
var Heels = /** @class */ (function (_super) {
    __extends(Heels, _super);
    function Heels(manufacturer, model, price, color, country, size, type) {
        var _this = _super.call(this, manufacturer, model, price, color, country, size) || this;
        _this.type = type;
        return _this;
    }
    Object.defineProperty(Heels.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: false,
        configurable: true
    });
    Heels.prototype.displayImage = function () {
        document.write("<img src='./pics/Heels.jpg'/><br/>");
    };
    Heels.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Type: " + this._type + '<br/>');
    };
    return Heels;
}(Shoes));
