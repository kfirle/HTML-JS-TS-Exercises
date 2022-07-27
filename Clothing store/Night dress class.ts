class NightDress extends Dress {
    private _fabric:string;

    get fabric() : string{
        return this._fabric;
    }
    set fabric(str:string){
        this._fabric = str;
    }

    displayImage(): void {
        document.write("<img src='./pics/NightDress.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Fabric: " + this._fabric + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, measurement:number, size:number, length:number, is_bare:boolean, fabric:string) {
        super(manufacturer,model,price,color,measurement,size,length,is_bare);
        this.fabric = fabric;
    }
}