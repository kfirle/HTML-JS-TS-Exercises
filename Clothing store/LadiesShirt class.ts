class LadiesShirt extends Shirt {
    private _fabric:string;

    get fabric() : string{
        return this._fabric;
    }
    set fabric(str:string){
        this._fabric = str;
    }

    displayImage(): void {
        document.write("<img src='./pics/LadiesShirt.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Fabric: " + this._fabric + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, sleeves_length:number, size:number, fabric:string) {
        super(manufacturer,model,price,color,sleeves_length,size);
        this.fabric = fabric;
    }
}