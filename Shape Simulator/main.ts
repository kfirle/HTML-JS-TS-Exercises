function main(){
    let shape_code:string = prompt("Select a shape: \n 1) Square \n 2) Rectangle \n 3) Triangle");
    let shape:Shape;
    let length:number;
    switch(shape_code){
        //Square
        case '1':
            length = +prompt("Insert square side length");
            if(isNaN(length) || length <=0 || Math.round(length) != length){
                throw Error("Error. Please enter a positive integer number.");
            }
            shape = new Square(length);
            break;

        //Recatngle
        case '2':
            let height:number = +prompt("Insert recatngle height");
            if(isNaN(height) || height <=0 || Math.round(height) != height){
                throw Error("Error. Please enter a positive integer number.");
            }
            let width:number = +prompt("Insert recatngle width");
            if(isNaN(width) || width <=0 ||  Math.round(width) != width){
                throw Error("Error. Please enter a positive integer number.");
            }
            shape = new Rectangle(height,width);
            break;

        //Triangle    
        case '3':
            length = +prompt("Insert triangle side length");
            if(isNaN(length) || length <=0 || Math.round(length) != length){
                throw Error("Error. Please enter a positive integer number.");
            }
            shape = new Triangle(length);
            break;
        default:
            throw Error("Error. Please select 1 or 2 or 3, for the shape type.");
    }
    let content:string = prompt("Select shape content: \n 1) * * * * * \n 2) *        * \n 3) 1 2 3 4 5 \n 4) 5 4 3 2 1");
    switch(content){
        case '1':
            shape.format = new Asterixformat();
            break;
 
        case '2':
            shape.format = new Frameformat();
            break;

        //numbers ascending    
        case '3':
            shape.format = new numAcsendformat();
            break;
        
        //numbers descending
        case '4':
            shape.format = new numDecsendformat();
            break;
        default:
            throw Error("Error. Please select 1 or 2 or 3 or 4, for the shape content.");
    }
    shape.print();
    shape.print_area_perimeter();
}