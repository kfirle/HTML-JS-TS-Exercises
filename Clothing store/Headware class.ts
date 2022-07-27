abstract class Headware extends Product {
    private _color:string;
    private _diameter:number;
    private _size:number;

    get color() : string{
        return this._color;
    }
    set color(str:string){
        this._color = str;
    }

    get diameter() : number{
        return this._diameter;
    }
    set diameter(num:number){
        this._diameter = num;
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
        document.write("Diameter: " + this._diameter + '<br/>');
        document.write("Size: " + this._size + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, diameter:number, size:number) {
        super(manufacturer,model,price);
        this.color = color;
        this.diameter = diameter;
        this.size = size;
    }
}