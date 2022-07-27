abstract class Shape{
    protected _format:Printformat;

    get format() : Printformat{
        return this._format;
    }

    set format(format:Printformat){
        this._format = format;
    }

    abstract print() : void;
    abstract print_area_perimeter() : void;
}

class Square extends Shape{
    private _length:number;

    get length() : number{
        return this._length;
    }

    set length(num:number){
        this._length = num;
    }

    print_area_perimeter() : void{
        let perimeter = this._length * 4;
        let area = this._length * this._length;
        document.write("Square Permimeter: " + perimeter + '<br/>');
        document.write("Square Area: " + area);
    }

    print(){
        for(let y=1; y<=this._length; y++){
            for(let x=1; x<=this._length; x++){
                this.format.printCell(x,y,this._length,this._length,this._length);
            }
            document.write('<br/>');
        }
        document.write('<br/>');
    }
 
    constructor(length:number){
        super();
        this.length = length;
    }
}

class Rectangle extends Shape{
    private _height:number;
    private _width:number;

    get height() : number{
        return this._height;
    }
    set height(num:number){
        this._height = num;
    }

    get width() : number{
        return this._width;
    }
    set width(num:number){
        this._width = num;
    }

    print_area_perimeter() : void{
        let perimeter = (this._height + this._width) * 2;
        let area = this._height * this._width;
        document.write("Rectangle Permimeter: " + perimeter + '<br/>');
        document.write("Rectangle Area: " + area);
        
    }

    print(): void {
        for(let y=1; y<=this._height; y++){
            for(let x=1; x<=this._width; x++){
                this.format.printCell(x,y,this._width,this._height,this._width);
            }
            document.write('<br/>');
        }
        document.write('<br/>');
    }

    constructor(height:number, width:number){
        super();
        this.height = height;
        this.width = width;
    }
}

class Triangle extends Shape{
    private _length:number;

    get length() : number{
        return this._length;
    }

    set length(num:number){
        this._length = num;
    }

    print_area_perimeter() : void{
        let hypotenuse = Math.sqrt(2 * Math.pow(this._length,2));
        let perimeter = this._length * 2 + hypotenuse;
        let area = this._length * this._length / 2;
        document.write("Triangle Permimeter: " + perimeter + '<br/>');
        document.write("Triangle Area: " + area);

    }

    print(): void {
        for(let y=1; y<=this._length; y++){
            for(let x=1; x<=y; x++){
                this.format.printCell(x,y,y,this._length,this._length);
            }
            document.write('<br/>');
        }
        document.write('<br/>');
    }

    constructor(length:number){
        super();
        this._length = length;
    }
}