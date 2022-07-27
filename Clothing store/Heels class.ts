enum HeelsType {
    low = "low",
    medium = "medium",
    high = "high"
  }

class Heels extends Shoes {
    private _type:HeelsType;

    get type() : HeelsType{
        return this._type;
    }
    set type(type:HeelsType){
        this._type = type;
    }

    displayImage(): void {
        document.write("<img src='./pics/Heels.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Type: " + this._type + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, country:string, size:number, type:HeelsType) {
        super(manufacturer,model,price,color,country,size);
        this.type = type;
    }
}