class Cap extends Headware {
    private _has_printing:boolean;

    get has_printing() : boolean{
        return this._has_printing;
    }
    set has_printing(has_printing:boolean){
        this._has_printing = has_printing;
    }

    displayImage(): void {
        document.write("<img src='./pics/Cap.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Has printing: " + this._has_printing + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, diameter:number, size:number,has_printing:boolean) {
        super(manufacturer,model,price,color,diameter,size);
        this.has_printing = has_printing;
    }
}