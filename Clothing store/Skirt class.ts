enum SkirtType {
    Short = "Short",
    Long = "Long"
  }

class Skirt extends WomenDress {
    private _type:SkirtType;

    get type() : SkirtType{
        return this._type;
    }
    set type(type:SkirtType){
        this._type = type;
    }

    displayImage(): void {
        document.write("<img src='./pics/Skirt.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Type: " + this._type + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, measurement:number, size:number, type:SkirtType) {
        super(manufacturer,model,price,color,measurement,size);
        this.type = type;
    }
}