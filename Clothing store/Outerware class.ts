abstract class Outerware extends Product {
    private _color:string;
    private _thickness:number;
    private _size:number;

    get color() : string{
        return this._color;
    }
    set color(str:string){
        this._color = str;
    }

    get thickness() : number{
        return this._thickness;
    }
    set thickness(num:number){
        this._thickness = num;
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
        document.write("Thickness: " + this._thickness + '<br/>');
        document.write("Size: " + this._size + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, thickness:number, size:number) {
        super(manufacturer,model,price);
        this.color = color;
        this.thickness = thickness;
        this.size = size;
    }
}