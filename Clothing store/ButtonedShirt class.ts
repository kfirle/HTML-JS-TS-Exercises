class ButtonedShirt extends Shirt {
    private _buttons:number;

    get buttons() : number{
        return this._buttons;
    }
    set buttons(num:number){
        this._buttons = num;
    }

    displayImage(): void {
        document.write("<img src='./pics/ButtonedShirt.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Buttons: " + this._buttons + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, sleeves_length:number, size:number, buttons:number) {
        super(manufacturer,model,price,color,sleeves_length,size);
        this.buttons = buttons;
    }
}