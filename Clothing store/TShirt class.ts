class TShirt extends Shirt {
    private _text:string;

    get text() : string{
        return this._text;
    }
    set text(str:string){
        this._text = str;
    }

    displayImage(): void {
        document.write("<img src='./pics/TShirt.jpg'/><br/>");
    }
    
    displayDetails(): void {
        super.displayDetails();
        document.write("Text: " + this._text + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, sleeves_length:number, size:number, text:string) {
        super(manufacturer,model,price,color,sleeves_length,size);
        this.text = text;
    }
}