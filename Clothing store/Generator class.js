var Generator1 = /** @class */ (function () {
    function Generator1() {
    }
    Generator1.prototype.getRandomItem = function (arr, prod_requested) {
        var prod;
        var num = Math.round(Math.random() * (arr.length - 1));
        var prod_type = arr[num];
        if (prod_requested <= 20) {
            arr.splice(num, 1);
        }
        switch (prod_type) {
            case "TShirt":
                var t_shirt = new TShirt(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                t_shirt.text = this.randText();
                this.shirtValues(t_shirt);
                return t_shirt;
            case "ButtonedShirt":
                var b_shirt = new ButtonedShirt(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                b_shirt.buttons = this.randButtonsPocketsDistance();
                this.shirtValues(b_shirt);
                return b_shirt;
            case "LadiesShirt":
                var l_shirt = new LadiesShirt(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                l_shirt.fabric = this.randFabric();
                this.shirtValues(l_shirt);
                return l_shirt;
            case "Jeans":
                var j_pants = new Jeans(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                j_pants.has_tears = this.randBoolean();
                this.pantsValues(j_pants);
                return j_pants;
            case "FabricPants":
                var f_pants = new FabricPants(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                f_pants.pockets = this.randButtonsPocketsDistance();
                this.pantsValues(f_pants);
                return f_pants;
            case "ShortPants":
                var s_pants = new ShortPants(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                s_pants.fabric_type = this.randFabric();
                this.pantsValues(s_pants);
                return s_pants;
            case "Skirt":
                var skirt = new Skirt(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                skirt.type = this.randSkirtLength();
                this.womenDressValues(skirt);
                return skirt;
            case "Dress":
                var dress = new Dress(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                this.dressValues(dress);
                return dress;
            case "NightDress":
                var n_dress = new NightDress(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                n_dress.fabric = this.randFabric();
                this.dressValues(n_dress);
                return n_dress;
            case "ElegantShoes":
                var e_shoes = new ElegantShoes(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                e_shoes.material = this.randShoeMaterial();
                this.flatShoesValues(e_shoes);
                return e_shoes;
            case "SportShoes":
                var s_shoes = new SportShoes(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                s_shoes.prod_date = this.randDate();
                this.flatShoesValues(s_shoes);
                return s_shoes;
            case "ComfortShoes":
                var c_shoes = new ComfortShoes(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                c_shoes.has_foothold = this.randBoolean();
                this.flatShoesValues(c_shoes);
                return c_shoes;
            case "Heels":
                var heels = new Heels(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                heels.type = this.randHeel();
                this.shoesValues(heels);
                return heels;
            case "Jacket":
                var jacket = new Jacket(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                jacket.pockets = this.randButtonsPocketsDistance();
                this.outerwareValues(jacket);
                return jacket;
            case "Coat":
                var coat = new Coat(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                coat.is_rain_coat = this.randBoolean();
                this.outerwareValues(coat);
                return coat;
            case "Cap":
                var cap = new Cap(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                cap.has_printing = this.randBoolean();
                this.headwareValues(cap);
                return cap;
            case "Hat":
                var hat = new Hat(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                hat.height = this.randDimension();
                this.headwareValues(hat);
                return hat;
            case "Belt":
                var belt = new Belt(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                this.beltValues(belt);
                return belt;
            case "Sunglasses":
                var sunglasses = new Sunglasses(undefined, undefined, undefined, undefined, undefined);
                sunglasses.glass_color = this.randColor();
                this.glassesValues(sunglasses);
                return sunglasses;
            case "ReadingGlasses":
                var reading_glasses = new ReadingGlasses(undefined, undefined, undefined, undefined, undefined);
                reading_glasses.distance = this.randButtonsPocketsDistance();
                this.glassesValues(reading_glasses);
                return reading_glasses;
        }
        return prod;
    };
    Generator1.prototype.randColor = function () {
        var colors = ["Red", "Blue", "Green"];
        var num = Math.round(Math.random() * (colors.length - 1));
        return colors[num];
    };
    Generator1.prototype.randCountry = function () {
        var countries = ["China", "Japan", "Israel"];
        var num = Math.round(Math.random() * (countries.length - 1));
        return countries[num];
    };
    Generator1.prototype.randText = function () {
        var texts = ["First", "Second", "Third"];
        var num = Math.round(Math.random() * (texts.length - 1));
        return texts[num];
    };
    Generator1.prototype.randFabric = function () {
        var fabrics = ["Silk", "Wool", "Cotton"];
        var num = Math.round(Math.random() * (fabrics.length - 1));
        return fabrics[num];
    };
    Generator1.prototype.randManufacturer = function () {
        var manufacturers = ["Mike", "Adidos", "Diadoga"];
        var num = Math.round(Math.random() * (manufacturers.length - 1));
        return manufacturers[num];
    };
    Generator1.prototype.randPrice = function () {
        var max = 1000;
        var num = Math.round(Math.random() * max + 1);
        return num;
    };
    Generator1.prototype.randModel = function () {
        var ascii_of_A = 65;
        var ascii_of_Z = 90;
        var num = Math.round(Math.random() * (ascii_of_Z - ascii_of_A) + ascii_of_A);
        var char = String.fromCharCode(num);
        return char;
    };
    Generator1.prototype.randSizeLengthMeasurementWidthDiameter = function () {
        var max = 100;
        var num = Math.round(Math.random() * max + 1);
        return num;
    };
    Generator1.prototype.randButtonsPocketsDistance = function () {
        var max = 10;
        var num = Math.round(Math.random() * max + 1);
        return num;
    };
    Generator1.prototype.randBoolean = function () {
        var num = Math.round(Math.random());
        return num == 1 ? true : false;
    };
    Generator1.prototype.randDimension = function () {
        var num = Math.round(Math.random() * 2 + 1);
        return num;
    };
    Generator1.prototype.randSkirtLength = function () {
        var num = Math.round(Math.random());
        return num == 1 ? SkirtType.Short : SkirtType.Long;
    };
    Generator1.prototype.randShoeMaterial = function () {
        var materials = [Material.fabric, Material.leather, Material.zamsh];
        var num = Math.round(Math.random() * (materials.length - 1));
        return materials[num];
    };
    Generator1.prototype.randHeel = function () {
        var types = [HeelsType.high, HeelsType.low, HeelsType.medium];
        var num = Math.round(Math.random() * (types.length - 1));
        return types[num];
    };
    Generator1.prototype.randBuckleMaterial = function () {
        var types = [BuckleMaterial.fabric, BuckleMaterial.leather, BuckleMaterial.plastic,
            BuckleMaterial.steel];
        var num = Math.round(Math.random() * (types.length - 1));
        return types[num];
    };
    Generator1.prototype.randDate = function () {
        var day = Math.round(Math.random() * 28);
        var month = Math.round(Math.random() * 12);
        var year = Math.round(Math.random() * 22 + 2000);
        var date = new Date();
        date.setFullYear(year, month, day);
        return date;
    };
    Generator1.prototype.productValues = function (prod) {
        prod.price = this.randPrice();
        prod.manufacturer = this.randManufacturer();
        prod.model = this.randModel();
    };
    Generator1.prototype.shirtValues = function (shirt) {
        shirt.size = this.randSizeLengthMeasurementWidthDiameter();
        shirt.color = this.randColor();
        shirt.sleeves_length = this.randSizeLengthMeasurementWidthDiameter();
        this.productValues(shirt);
    };
    Generator1.prototype.pantsValues = function (pants) {
        pants.size = this.randSizeLengthMeasurementWidthDiameter();
        pants.color = this.randColor();
        pants.length = this.randSizeLengthMeasurementWidthDiameter();
        this.productValues(pants);
    };
    Generator1.prototype.womenDressValues = function (womenDress) {
        womenDress.size = this.randSizeLengthMeasurementWidthDiameter();
        womenDress.color = this.randColor();
        womenDress.measurement = this.randSizeLengthMeasurementWidthDiameter();
        this.productValues(womenDress);
    };
    Generator1.prototype.dressValues = function (dress) {
        dress.length = this.randSizeLengthMeasurementWidthDiameter();
        dress.is_bare = this.randBoolean();
        this.womenDressValues(dress);
    };
    Generator1.prototype.shoesValues = function (shoes) {
        shoes.size = this.randSizeLengthMeasurementWidthDiameter();
        shoes.color = this.randColor();
        shoes.country = this.randCountry();
        this.productValues(shoes);
    };
    Generator1.prototype.flatShoesValues = function (flat_shoes) {
        flat_shoes.has_shoe_laces = this.randBoolean();
        this.shoesValues(flat_shoes);
    };
    Generator1.prototype.outerwareValues = function (outerware) {
        outerware.size = this.randSizeLengthMeasurementWidthDiameter();
        outerware.color = this.randColor();
        outerware.thickness = this.randSizeLengthMeasurementWidthDiameter();
        this.productValues(outerware);
    };
    Generator1.prototype.headwareValues = function (headware) {
        headware.size = this.randSizeLengthMeasurementWidthDiameter();
        headware.color = this.randColor();
        headware.diameter = this.randSizeLengthMeasurementWidthDiameter();
        this.productValues(headware);
    };
    Generator1.prototype.beltValues = function (belt) {
        belt.dimensions = new Dimensions(this.randDimension(), this.randDimension(), this.randDimension());
        belt.belt_color = this.randColor();
        belt.buckle_color = this.randColor();
        belt.buckle_material = this.randBuckleMaterial();
        this.productValues(belt);
    };
    Generator1.prototype.glassesValues = function (glasses) {
        glasses.frame_color = this.randColor();
        this.productValues(glasses);
    };
    return Generator1;
}());
