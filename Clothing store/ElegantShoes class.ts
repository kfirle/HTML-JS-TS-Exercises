enum Material {
    fabric = "fabric",
    leather = "lether",
    zamsh = "zamsh"
  }

class ElegantShoes extends FlatShoes {
    private _material:Material;

    get material() : Material{
        return this._material;
    }
    set material(material:Material){
        this._material = material;
    }

    displayImage(): void {
        document.write("<img src='./pics/ElegantShoes.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Material: " + this._material + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, country:string, size:number, has_shoe_laces:boolean, material:Material) {
        super(manufacturer,model,price,color,country,size,has_shoe_laces);
        this.material = material;
    }
}