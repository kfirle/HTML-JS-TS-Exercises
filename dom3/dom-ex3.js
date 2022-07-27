function save(){
    let tagtype = document.getElementById("tagtype");
    if(tagtype.value == undefined){
        tagtype = "h1";
    }
    let input_array = document.getElementsByTagName("input");
    let textcolor = input_array[0];
    let bgcolor = input_array[1];
    let content = input_array[2];
    let new_tag = document.createElement(tagtype.value);
    new_tag.className = "mandatory";
    let alignment = document.getElementById("alignment");
    if(alignment.value != undefined){
        new_tag.style.textAlign = alignment.value;
    }
    if(textcolor.value != bgcolor.value){
        new_tag.style.color = textcolor.value;
        new_tag.style.backgroundColor = bgcolor.value;
    }
    if(content.value != undefined){
        new_tag.innerHTML = content.value;
    }
    document.body.appendChild(new_tag);
}
    