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
var Dress = /** @class */ (function (_super) {
    __extends(Dress, _super);
    function Dress(manufacturer, model, price, color, measurement, size, length, is_bare) {
        var _this = _super.call(this, manufacturer, model, price, color, measurement, size) || this;
        _this.length = length;
        _this.is_bare = is_bare;
        return _this;
    }
    Object.defineProperty(Dress.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (num) {
            this._length = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dress.prototype, "is_bare", {
        get: function () {
            return this._is_bare;
        },
        set: function (is_bare) {
            this._is_bare = is_bare;
        },
        enumerable: false,
        configurable: true
    });
    Dress.prototype.displayImage = function () {
        document.write("<img src='./pics/Dress.jpg'/><br/>");
    };
    Dress.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Length: " + this._length + '<br/>');
        document.write("Is bare: " + this._is_bare + '<br/>');
    };
    return Dress;
}(WomenDress));
