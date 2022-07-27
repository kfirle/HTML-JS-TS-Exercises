abstract class Shirt extends Product {
    private _color:string;
    private _sleeves_length:number;
    private _size:number;

    get color() : string{
        return this._color;
    }
    set color(str:string){
        this._color = str;
    }

    get sleeves_length() : number{
        return this._sleeves_length;
    }
    set sleeves_length(num:number){
        this._sleeves_length = num;
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
        document.write("Sleeves_length: " + this._sleeves_length + '<br/>');
        document.write("Size: " + this._size + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, sleeves_length:number, size:number) {
        super(manufacturer,model,price);
        this.color = color;
        this.sleeves_length = sleeves_length;
        this.size = size;
    }
}