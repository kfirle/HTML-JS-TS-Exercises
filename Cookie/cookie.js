function saveColor() {
	let myvar = document.getElementById("my-text");
	document.body.style.backgroundColor = myvar.value;
    let d = new Date();
    d.setTime(d.getTime() + 1000 * 3600 * 24 * 14); //two weeks from today
    document.cookie = "color=" + myvar.value + ";expires=" + d.toUTCString();
}

function load() {
	let my_cookie = document.cookie;
    let d = new Date();
    d.setTime(d.getTime() + 1000 * 3600 * 24 * 14); //two weeks from today
    if(my_cookie.indexOf("counts") == -1){
        document.cookie = "counts=1;" + "expires=" + d.toUTCString();
        document.getElementById("visits").innerHTML = "hello this is your 1 visit";
    }
    else{
        //not the first time in the website
        let new_counts;
        let color;
        let cookie_array = my_cookie.split(";")
        let cookie1 = cookie_array[0].split("=");
        if(my_cookie.indexOf("color")!= -1){
            let cookie2 = cookie_array[1].split("=");
            if(cookie1[0] == "counts"){
                new_counts = +cookie1[1] + 1;
                color = cookie2[1];
            }
            else{
                new_counts = +cookie2[1] + 1;
                color = cookie1[1];
            }
            document.body.style.backgroundColor = color;
        }
        else{
            //color has not been selected
            new_counts = +cookie1[1] + 1;
        }
        document.getElementById("visits").innerHTML = "hello this is your " + new_counts +" visit";
        document.cookie = "counts=" + new_counts + ";expires=" + d.toUTCString();
    }
}