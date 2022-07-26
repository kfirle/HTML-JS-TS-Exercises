var Airplane = /** @class */ (function () {
    function Airplane(pilot, company, dest1) {
        this.pilot_name = pilot;
        this.company_name = company;
        this.dest = dest1;
    }
    Airplane.prototype.fly = function (speed) {
        console.log("The aireplane's speed is: " + speed);
    };
    Airplane.prototype.land = function () {
        var num = Math.round(Math.random());
        if (num == 1) {
            console.log("The aireplane has landed");
            return true;
        }
        console.log("The aireplane has not landed");
        return false;
    };
    Object.defineProperty(Airplane.prototype, "pilot_name", {
        get: function () {
            return this._pilot_name;
        },
        set: function (str) {
            this._pilot_name = str;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "company_name", {
        get: function () {
            return this._company_name;
        },
        set: function (str) {
            this._company_name = str;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "dest", {
        get: function () {
            return this._dest;
        },
        set: function (str) {
            this._dest = str;
        },
        enumerable: false,
        configurable: true
    });
    return Airplane;
}());
var Kite = /** @class */ (function () {
    function Kite(color1, price1) {
        this.color = color1;
        this.price = price1;
    }
    Kite.prototype.fly = function (speed) {
        console.log("The kite's speed is: " + speed);
    };
    Kite.prototype.land = function () {
        var num = Math.round(Math.random());
        if (num == 1) {
            console.log("The kite has landed");
            return true;
        }
        console.log("The kite has not landed");
        return false;
    };
    Object.defineProperty(Kite.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (str) {
            this._color = str;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kite.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (num) {
            if (num <= 0) {
                console.log("illegal price");
            }
            this._price = num;
        },
        enumerable: false,
        configurable: true
    });
    return Kite;
}());
var Bird = /** @class */ (function () {
    function Bird(type1, age1, col) {
        this.type = type1;
        this.age = age1;
        this.color = col;
    }
    Bird.prototype.fly = function (speed) {
        console.log("The bird's speed is: " + speed);
    };
    Bird.prototype.land = function () {
        var num = Math.round(Math.random());
        if (num == 1) {
            console.log("The bird has landed");
            return true;
        }
        console.log("The bird has not landed");
        return false;
    };
    Object.defineProperty(Bird.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (str) {
            this._type = str;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (num) {
            if (num <= 0) {
                console.log("illegal age");
            }
            this._age = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (str) {
            this._color = str;
        },
        enumerable: false,
        configurable: true
    });
    return Bird;
}());
