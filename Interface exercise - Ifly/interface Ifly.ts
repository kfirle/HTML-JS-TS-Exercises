interface Ifly{
    fly(speed:number) : void;
    land() :boolean;
}

class Airplane implements Ifly{
    private _pilot_name:string;
    private _company_name:string;
    private _dest:string;
    fly(speed: number): void {
        console.log("The aireplane's speed is: " + speed);
    }
    land(): boolean {
        let num = Math.round(Math.random());
        if(num == 1){
            console.log("The aireplane has landed");
            return true;
        }
        console.log("The aireplane has not landed");
        return false;
    }
    get pilot_name() : string{
        return this._pilot_name;
    }
    set pilot_name(str:string){
        this._pilot_name = str;
    }

    get company_name() : string{
        return this._company_name;
    }
    set company_name(str:string){
        this._company_name = str;
    }

    get dest() : string{
        return this._dest;
    }
    set dest(str:string){
        this._dest = str;
    }

    constructor(pilot:string, company: string, dest1:string){
        this.pilot_name = pilot;
        this.company_name = company;
        this.dest = dest1;
    }

}

class Kite implements Ifly{
    private _color:string;
    private _price:number;
    fly(speed: number): void {
        console.log("The kite's speed is: " + speed);
    }
    land(): boolean {
        let num = Math.round(Math.random());
        if(num == 1){
            console.log("The kite has landed");
            return true;
        }
        console.log("The kite has not landed");
        return false;
    }
    get color() : string{
        return this._color;
    }
    set color(str:string){
        this._color = str;
    }

    get price() : number{
        return this._price;
    }
    set price(num:number){
        if(num<=0){
            console.log("illegal price");
        }
        this._price = num;
    }

    constructor(color1:string, price1: number){
        this.color = color1;
        this.price = price1;
    }
}

class Bird implements Ifly{
    private _type:string;
    private _age:number;
    private _color:string;
    fly(speed: number): void {
        console.log("The bird's speed is: " + speed);
    }
    land(): boolean {
        let num = Math.round(Math.random());
        if(num == 1){
            console.log("The bird has landed");
            return true;
        }
        console.log("The bird has not landed");
        return false;
    }
    get type() : string{
        return this._type;
    }
    set type(str:string){
        this._type = str;
    }

    get age() : number{
        return this._age;
    }
    set age(num:number){
        if(num<=0){
            console.log("illegal age");
        }
        this._age = num;
    }
    
    get color() : string{
        return this._color;
    }
    set color(str:string){
        this._color = str;
    }

    constructor(type1:string, age1: number, col:string){
        this.type = type1;
        this.age = age1;
        this.color = col;
    }
}