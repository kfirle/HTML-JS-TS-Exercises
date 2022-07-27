var Tester = /** @class */ (function () {
    function Tester() {
    }
    Tester.prototype.test = function () {
        var prod_list = ["TShirt", "ButtonedShirt", "LadiesShirt", "Jeans", "FabricPants", "ShortPants", "Skirt",
            "Dress", "NightDress", "ElegantShoes", "SportShoes", "ComfortShoes", "Heels", "Jacket", "Coat", "Cap",
            "Hat", "Belt", "Sunglasses", "ReadingGlasses"];
        var arr_size;
        var gen = new Generator1();
        do {
            arr_size = +prompt("Insert array's size");
        } while (isNaN(arr_size) || arr_size <= 0);
        var products = [];
        for (var j = 0; j < arr_size; j++) {
            products.push(gen.getRandomItem(prod_list, arr_size));
        }
        for (var i = 0; i < products.length; i++) {
            products[i].displayDetails();
            products[i].displayImage();
            document.write("Price Without Vat: " + products[i].getPriceWithoutVat() + '<br/>');
            document.write("Brand: " + products[i].brand() + '<br/>');
            if (products[i] instanceof Belt) {
                document.write(products[i].buckle_color);
            }
            document.write('<hr/>');
        }
    };
    return Tester;
}());
