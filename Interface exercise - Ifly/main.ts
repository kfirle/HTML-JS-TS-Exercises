function createIfly() : Ifly{
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            let bird1:Bird = new Bird("d", 1, "e");
            return bird1;
        case 1:
            let air1:Airplane = new Airplane("a", "b", "c");
            return air1;
        case 2:
            let kite1:Kite = new Kite("a", 5);
            return kite1;
    }
}

let ifly_arr: Array<Ifly> = new Array<Ifly>(10);
for(let i=0;i<ifly_arr.length;i++){
    let ifly1:Ifly = createIfly();
    ifly_arr[i] = ifly1;
}
console.log(ifly_arr);
for(let j=0;j<ifly_arr.length;j++){
    ifly_arr[j].fly(10);
    ifly_arr[j].land();
}
