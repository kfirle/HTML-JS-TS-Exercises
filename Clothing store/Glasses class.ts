abstract class Glasses extends Product {
    private _frame_color:string;

    get frame_color() : string{
        return this._frame_color;
    }
    set frame_color(str:string){
        this._frame_color = str;
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Frame Color: " + this._frame_color + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, frame_color:string) {
        super(manufacturer,model,price);
        this.frame_color = frame_color;
    }
}