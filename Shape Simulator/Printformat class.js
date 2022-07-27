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
var Printformat = /** @class */ (function () {
    function Printformat() {
    }
    return Printformat;
}());
var Asterixformat = /** @class */ (function (_super) {
    __extends(Asterixformat, _super);
    function Asterixformat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Asterixformat.prototype.printCell = function (x, y, width, height, orgwidth) {
        document.write('* ');
    };
    return Asterixformat;
}(Printformat));
var Frameformat = /** @class */ (function (_super) {
    __extends(Frameformat, _super);
    function Frameformat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Frameformat.prototype.printCell = function (x, y, width, height, orgwidth) {
        if (x == 1 || x == width || y == 1 || y == height) {
            document.write('* ');
        }
        else {
            document.write('&nbsp&nbsp&nbsp');
        }
    };
    return Frameformat;
}(Printformat));
var numAcsendformat = /** @class */ (function (_super) {
    __extends(numAcsendformat, _super);
    function numAcsendformat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    numAcsendformat.prototype.printCell = function (x, y, width, height, orgwidth) {
        document.write(x + " ");
    };
    return numAcsendformat;
}(Printformat));
var numDecsendformat = /** @class */ (function (_super) {
    __extends(numDecsendformat, _super);
    function numDecsendformat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    numDecsendformat.prototype.printCell = function (x, y, width, height, orgwidth) {
        var output = orgwidth - x + 1;
        document.write(output + " ");
    };
    return numDecsendformat;
}(Printformat));
