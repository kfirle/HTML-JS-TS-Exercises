class ShortPants extends Pants {
    private _fabric_type:string;

    get fabric_type() : string{
        return this._fabric_type;
    }
    set fabric_type(str:string){
        this._fabric_type = str;
    }

    displayImage(): void {
        document.write("<img src='./pics/ShortPants.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Fabric type: " + this._fabric_type + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, length:number, size:number, fabric_type:string) {
        super(manufacturer,model,price,color,length,size);
        this.fabric_type = fabric_type;
    }
}