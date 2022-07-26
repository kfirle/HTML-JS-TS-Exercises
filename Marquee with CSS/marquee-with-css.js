let i=0;
let timeout = 1;
let pic = document.getElementById("my-pic");

function a() {
    if(i == window.innerWidth - +pic.width){
        clearTimeout(t1);
        t2 = setTimeout(b, timeout);
    }
    pic.style.left = i + "px";
    i++;
    t1= setTimeout(a, timeout);
}

function b(){
    if(i==0){
        clearTimeout(t2);
        t1= setTimeout(a, timeout);
    }
    pic.style.left = i + "px";
    i--;
    t2 = setTimeout(b, timeout);
}