enum BuckleMaterial {
    steel = "steel",
    leather = "leather",
    fabric = "fabric",
    plastic = "plastic"
  }

class Belt extends Product {
    private _belt_color:string;
    private _buckle_color:string;
    private _buckle_material:BuckleMaterial;
    private _dimensions:Dimensions;

    get belt_color() : string{
        return this._belt_color;
    }
    set belt_color(color:string){
        this._belt_color = color;
    }

    get buckle_color() : string{
        return this._buckle_color;
    }
    set buckle_color(color:string){
        this._buckle_color = color;
    }

    get buckle_material() : BuckleMaterial{
        return this._buckle_material;
    }
    set buckle_material(material:BuckleMaterial){
        this._buckle_material = material;
    }

    get dimensions() : Dimensions{
        return this._dimensions;
    }
    set dimensions(dimensions:Dimensions){
        this._dimensions = dimensions;
    }
    
    displayImage(): void {
        document.write("<img src='./pics/Belt.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Belt color: " + this._belt_color + '<br/>');
        document.write("Buckle color: " + this._buckle_color + '<br/>');
        document.write("Buckle material: " + this._buckle_material + '<br/>');
        this._dimensions.displayDetails();
    }

    constructor(manufacturer:string, model:string, price:number, belt_color:string, buckle_color:string, buckle_material:BuckleMaterial, dimensions:Dimensions) {
        super(manufacturer,model,price);
        this.belt_color = belt_color;
        this.buckle_color = buckle_color;
        this.buckle_material = buckle_material;
        this.dimensions = dimensions;
    }
}