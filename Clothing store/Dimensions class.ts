class Dimensions{
    private _length:number;
    private _width:number;
    private _height:number;

    get length() : number{
        return this._length;
    }
    set length(num:number){
        this._length = num;
    }

    get width() : number{
        return this._width;
    }
    set width(num:number){
        this._width = num;
    }

    get height() : number{
        return this._height;
    }
    set height(num:number){
        this._height = num;
    }

    displayDetails() : void{
        document.write("Length: " + this._length + '<br/>');
        document.write("Width: " + this._width + '<br/>');
        document.write("Height: " + this._height + '<br/>');
    }

    constructor(length:number, width:number, height:number) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
}