abstract class Printformat{
    abstract printCell(x:number, y:number, width:number, height:number, orgwidth:number): void;
}

class Asterixformat extends Printformat{
    printCell(x:number, y:number, width:number, height:number, orgwidth:number): void {
        document.write('* ');
    }
}

class Frameformat extends Printformat{
    printCell(x:number, y:number, width:number, height:number, orgwidth:number): void {
        if(x==1 || x == width || y==1 || y == height){
            document.write('* ');
        }
        else{
            document.write('&nbsp&nbsp&nbsp');
        }
    }
}

class numAcsendformat extends Printformat{
    printCell(x:number, y:number, width:number, height:number, orgwidth:number): void {
        document.write(x + " ");
    }
}

class numDecsendformat extends Printformat{
    printCell(x:number, y:number, width:number, height:number, orgwidth:number): void {
        let output:number = orgwidth -x +1;
        document.write(output + " ");
    }
}