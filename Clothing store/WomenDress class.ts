abstract class WomenDress extends Product {
    private _color:string;
    private _measurement:number;
    private _size:number;

    get color() : string{
        return this._color;
    }
    set color(str:string){
        this._color = str;
    }

    get measurement() : number{
        return this._measurement;
    }
    set measurement(num:number){
        this._measurement = num;
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
        document.write("Measurement: " + this._measurement + '<br/>');
        document.write("Size: " + this._size + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, measurement:number, size:number) {
        super(manufacturer,model,price);
        this.color = color;
        this.measurement = measurement;
        this.size = size;
    }
}