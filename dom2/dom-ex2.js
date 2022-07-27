function save(){
    //creating the header
    let new_header = document.createElement("h1");
    let input_array = document.getElementsByTagName("input");
    let firstname = input_array[0];
    let lastname = input_array[1];
    let age = input_array[2];
    let kids = input_array[3];
    new_header.innerHTML = firstname.value + " " + lastname.value + " Age: " + age.value + " Kids: " + kids.value;
    new_header.style.textAlign="center";
    document.body.appendChild(new_header);

    //creating the div
    let new_div = document.createElement("div");
    new_div.style.textAlign = "center";
    for(let i=0; i<kids.value; i++){
        let newline = document.createElement("br");
        let new_input = document.createElement("input");
        new_div.appendChild(new_input);
        new_div.appendChild(newline);
        newline = document.createElement("br");
        new_div.appendChild(newline);
    }

    //cleaning the fields
    document.body.appendChild(new_div);
    for(let j=0;j<input_array.length;j++){
        input_array[j].value = null;
    }

    //storing the user in an array
    let user = {
        "firstname": firstname.value,
        "lastname": lastname.value,
        "Age": age.value,
        "Kids": kids.value
   };
   let users_array = [];
   users_array.push(user);
}