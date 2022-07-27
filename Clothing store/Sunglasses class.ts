class Sunglasses extends Glasses {
    private _glass_color:string;

    get glass_color() : string{
        return this._glass_color;
    }
    set glass_color(str:string){
        this._glass_color = str;
    }

    displayImage(): void {
        document.write("<img src='./pics/Sunglasses.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Glass_color: " + this._glass_color + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, frame_color:string, glass_color:string) {
        super(manufacturer,model,price,frame_color);
        this.glass_color = glass_color;
    }
}