class Dress extends WomenDress {
    private _length:number;
    private _is_bare:boolean;

    get length() : number{
        return this._length;
    }
    set length(num:number){
        this._length = num;
    }

    get is_bare() : boolean{
        return this._is_bare;
    }
    set is_bare(is_bare:boolean){
        this._is_bare = is_bare;
    }

    displayImage(): void {
        document.write("<img src='./pics/Dress.jpg'/><br/>");
    }

    displayDetails(): void {
        super.displayDetails();
        document.write("Length: " + this._length + '<br/>');
        document.write("Is bare: " + this._is_bare + '<br/>');
    }

    constructor(manufacturer:string, model:string, price:number, color:string, measurement:number, size:number, length:number, is_bare:boolean) {
        super(manufacturer,model,price,color,measurement,size);
        this.length = length;
        this.is_bare = is_bare;
    }
}