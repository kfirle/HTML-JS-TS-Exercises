function createIfly() {
    var num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            var bird1 = new Bird("d", 1, "e");
            return bird1;
        case 1:
            var air1 = new Airplane("a", "b", "c");
            return air1;
        case 2:
            var kite1 = new Kite("a", 5);
            return kite1;
    }
}
var ifly_arr = new Array(10);
for (var i = 0; i < ifly_arr.length; i++) {
    var ifly1 = createIfly();
    ifly_arr[i] = ifly1;
}
console.log(ifly_arr);
for (var j = 0; j < ifly_arr.length; j++) {
    ifly_arr[j].fly(10);
    ifly_arr[j].land();
}
