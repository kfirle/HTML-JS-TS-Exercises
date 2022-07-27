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
var ButtonedShirt = /** @class */ (function (_super) {
    __extends(ButtonedShirt, _super);
    function ButtonedShirt(manufacturer, model, price, color, sleeves_length, size, buttons) {
        var _this = _super.call(this, manufacturer, model, price, color, sleeves_length, size) || this;
        _this.buttons = buttons;
        return _this;
    }
    Object.defineProperty(ButtonedShirt.prototype, "buttons", {
        get: function () {
            return this._buttons;
        },
        set: function (num) {
            this._buttons = num;
        },
        enumerable: false,
        configurable: true
    });
    ButtonedShirt.prototype.displayImage = function () {
        document.write("<img src='./pics/ButtonedShirt.jpg'/><br/>");
    };
    ButtonedShirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Buttons: " + this._buttons + '<br/>');
    };
    return ButtonedShirt;
}(Shirt));
