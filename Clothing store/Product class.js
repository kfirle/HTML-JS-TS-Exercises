var VAT = 0.17;
var Product = /** @class */ (function () {
    function Product(manufacturer, model, price) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;
    }
    Object.defineProperty(Product.prototype, "manufacturer", {
        get: function () {
            return this._manufacturer;
        },
        set: function (str) {
            this._manufacturer = str;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (str) {
            this._model = str;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (num) {
            this._price = num;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.displayDetails = function () {
        document.write("Manufacturer: " + this._manufacturer + '<br/>');
        document.write("Model: " + this._model + '<br/>');
        document.write("Price: " + this._price + '<br/>');
    };
    Product.prototype.getPriceWithoutVat = function () {
        return this.price / (1 + VAT);
    };
    Product.prototype.brand = function () {
        return this._manufacturer + " " + this._model;
    };
    return Product;
}());
