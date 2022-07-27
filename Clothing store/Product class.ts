const VAT = 0.17;

abstract class Product {
    private _manufacturer:string;
    private _model:string;
    private _price:number;

    get manufacturer() : string{
        return this._manufacturer;
    }
    set manufacturer(str:string){
        this._manufacturer = str;
    }

    get model() : string{
        return this._model;
    }
    set model(str:string){
        this._model = str;
    }

    get price() : number{
        return this._price;
    }
    set price(num:number){
        this._price = num;
    }

    abstract displayImage() : void;

    displayDetails() : void{
        document.write("Manufacturer: " + this._manufacturer + '<br/>');
        document.write("Model: " + this._model + '<br/>');
        document.write("Price: " + this._price + '<br/>');
    }

    getPriceWithoutVat() : number{
        return this.price / (1 + VAT);
    }

    brand() : string {
        return this._manufacturer + " " + this._model;
    }

    constructor(manufacturer:string, model:string, price:number) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;
    }
}