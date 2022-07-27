class FabricPants extends Pants {
    private _pockets:number;

    get pockets() : number{
        return this._pockets;
    }
    set pockets(num:number){
        this._pockets = num;
    }

    displayImage(): void {
        document.write("<img src='./pics/FabricPants.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Pockets: " + this._pockets + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, length:number, size:number, pockets:number) {
        super(manufacturer,model,price,color,length,size);
        this.pockets = pockets;
    }
}