class SportShoes extends FlatShoes {
    private _prod_date:Date;

    get prod_date() : Date{
        return this._prod_date;
    }
    set prod_date(material:Date){
        this._prod_date = material;
    }

    displayImage(): void {
        document.write("<img src='./pics/SportShoes.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Prod date: " + this._prod_date + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, country:string, size:number, has_shoe_laces:boolean, prod_date:Date) {
        super(manufacturer,model,price,color,country,size,has_shoe_laces);
        this.prod_date = prod_date;
    }
}