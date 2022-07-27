class Hat extends Headware {
    private _height:number;

    get height() : number{
        return this._height;
    }
    set height(num:number){
        this._height = num;
    }

    displayImage(): void {
        document.write("<img src='./pics/Hat.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Height: " + this._height + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, diameter:number, size:number,height:number) {
        super(manufacturer,model,price,color,diameter,size);
        this.height = height;
    }
}