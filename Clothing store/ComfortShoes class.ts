class ComfortShoes extends FlatShoes {
    private _has_foothold:boolean;

    get has_foothold() : boolean{
        return this._has_foothold;
    }
    set has_foothold(material:boolean){
        this._has_foothold = material;
    }

    displayImage(): void {
        document.write("<img src='./pics/ComfortShoes.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Has foothold: " + this._has_foothold + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, country:string, size:number, has_shoe_laces:boolean, has_foothold:boolean) {
        super(manufacturer,model,price,color,country,size,has_shoe_laces);
        this.has_foothold = has_foothold;
    }
}