function createTask(){
    let new_div = document.createElement("div");
    
    let task = document.createElement("input");
    new_div.appendChild(task);
    task.placeholder = "Insert a task";
    task.size=50;
    task.style="height:40px;"
    task.disabled = false;

    let edit_save_button = document.createElement("button");
    edit_save_button.style = "text-align: center; width: 28px; height: 28px;";
    edit_save_button.innerHTML = "<img src='Assets/save.PNG' width='18px' height='18px'/>"; 
    edit_save_button.onclick = () => {
        if(task.disabled == false){
            task.disabled = true;
            edit_save_button.innerHTML = "<img src='Assets/edit.PNG' width='18px' height='18px'/>";
        }
        else{
            task.disabled = false;
            edit_save_button.innerHTML = "<img src='Assets/save.PNG' width='18px' height='18px'/>";
        }
    };
    new_div.appendChild(edit_save_button);

    let delete_button = document.createElement("button");
    delete_button.innerHTML = "<img src='Assets/trash.PNG' width='15px' height='18px'/>";
    delete_button.onclick = () => new_div.remove();
    new_div.appendChild(delete_button);

    document.body.appendChild(new_div);
}