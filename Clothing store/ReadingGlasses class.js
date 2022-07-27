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
var ReadingGlasses = /** @class */ (function (_super) {
    __extends(ReadingGlasses, _super);
    function ReadingGlasses(manufacturer, model, price, frame_color, distance) {
        var _this = _super.call(this, manufacturer, model, price, frame_color) || this;
        _this.distance = distance;
        return _this;
    }
    Object.defineProperty(ReadingGlasses.prototype, "distance", {
        get: function () {
            return this._distance;
        },
        set: function (num) {
            this._distance = num;
        },
        enumerable: false,
        configurable: true
    });
    ReadingGlasses.prototype.displayImage = function () {
        document.write("<img src='./pics/ReadingGlasses.jpg'/><br/>");
    };
    ReadingGlasses.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Distance: " + this._distance + '<br/>');
    };
    return ReadingGlasses;
}(Glasses));
