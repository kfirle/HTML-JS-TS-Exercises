class ReadingGlasses extends Glasses {
    private _distance:number;

    get distance() : number{
        return this._distance;
    }
    set distance(num:number){
        this._distance = num;
    }

    displayImage(): void {
        document.write("<img src='./pics/ReadingGlasses.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Distance: " + this._distance + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, frame_color:string, distance:number) {
        super(manufacturer,model,price,frame_color);
        this.distance = distance;
    }
}