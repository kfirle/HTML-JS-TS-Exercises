abstract class Shoes extends Product {
    private _color:string;
    private _country:string;
    private _size:number;

    get color() : string{
        return this._color;
    }
    set color(str:string){
        this._color = str;
    }

    get country() : string{
        return this._country;
    }
    set country(str:string){
        this._country = str;
    }

    get size() : number{
        return this._size;
    }
    set size(num:number){
        this._size = num;
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Color: " + this._color + '<br/>');
        document.write("Country: " + this._country + '<br/>');
        document.write("Size: " + this._size + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, country:string, size:number) {
        super(manufacturer,model,price);
        this.color = color;
        this.country = country;
        this.size = size;
    }
}