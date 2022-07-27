abstract class FlatShoes extends Shoes {
    private _has_shoe_laces:boolean;

    get has_shoe_laces() : boolean{
        return this._has_shoe_laces;
    }
    set has_shoe_laces(has_shoe_laces:boolean){
        this._has_shoe_laces = has_shoe_laces;
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Has Laces: " + this._has_shoe_laces + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, country:string, size:number, has_shoe_laces:boolean) {
        super(manufacturer,model,price,color,country,size);
        this.has_shoe_laces = has_shoe_laces;
    }
}