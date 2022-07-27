abstract class Pants extends Product {
    private _color:string;
    private _length:number;
    private _size:number;

    get color() : string{
        return this._color;
    }
    set color(str:string){
        this._color = str;
    }

    get length() : number{
        return this._length;
    }
    set length(num:number){
        this._length = num;
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
        document.write("Length: " + this._length + '<br/>');
        document.write("Size: " + this._size + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, length:number, size:number) {
        super(manufacturer,model,price);
        this.color = color;
        this.length = length;
        this.size = size;
    }
}