class Coat extends Outerware {
    private _is_rain_coat:boolean;

    get is_rain_coat() : boolean{
        return this._is_rain_coat;
    }
    set is_rain_coat(is_rain_coat:boolean){
        this._is_rain_coat = is_rain_coat;
    }

    displayImage(): void {
        document.write("<img src='./pics/Coat.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Is rain coat: " + this._is_rain_coat + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, thickness:number, size:number, is_rain_coat:boolean) {
        super(manufacturer,model,price,color,thickness,size);
        this.is_rain_coat = is_rain_coat;
    }
}