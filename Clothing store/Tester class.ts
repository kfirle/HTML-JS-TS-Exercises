class Tester{
    test(){
        let prod_list = ["TShirt","ButtonedShirt", "LadiesShirt", "Jeans", "FabricPants", "ShortPants", "Skirt",
            "Dress", "NightDress", "ElegantShoes", "SportShoes", "ComfortShoes", "Heels", "Jacket", "Coat", "Cap",
            "Hat", "Belt", "Sunglasses", "ReadingGlasses"];
        let arr_size:number;
        let gen:Generator1 = new Generator1();

        do{
           arr_size = +prompt("Insert array's size"); 
        } while(isNaN(arr_size) || arr_size <= 0);

        let products:Array<Product> = [];
        for(let j=0; j<arr_size; j++){
            products.push(gen.getRandomItem(prod_list,arr_size));
        }
        for(let i=0; i<products.length; i++){
            products[i].displayDetails();
            products[i].displayImage();
            document.write("Price Without Vat: " + products[i].getPriceWithoutVat() + '<br/>');
            document.write("Brand: " + products[i].brand() + '<br/>');
            if(products[i] instanceof Belt){
                document.write((products[i] as Belt).buckle_color);
            }
            document.write('<hr/>');
        }
    }
}