class Jeans extends Pants {
    private _has_tears:boolean;

    get has_tears() : boolean{
        return this._has_tears;
    }
    set has_tears(has_tears:boolean){
        this._has_tears = has_tears;
    }

    displayImage(): void {
        document.write("<img src='./pics/Jeans.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Has tears: " + this._has_tears + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, length:number, size:number, has_tears:boolean) {
        super(manufacturer,model,price,color,length,size);
        this.has_tears = has_tears;
    }
}