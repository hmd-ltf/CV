const input_Field = document.getElementById("InputField");
const add_button = document.getElementById("Add");
list = document.getElementsByTagName("ul"); //the only ul tag so just use 0

add_button.addEventListener("click" , addItemFunction);

function addItemFunction() {
    //Things that will go inside the ul lists li tag
    var_li = document.createElement("li");

    item_name = document.createElement("item_name");
    var_text = document.createTextNode(input_Field.value);

    item_name.appendChild(var_text);
    var_li.appendChild(item_name);

    //adding buttons
    var_button_done = document.createElement("button");
    var_done = document.createElement("i");
    var_done.className = "fas fa-clipboard-check";
    var_button_done.appendChild(var_done);
    var_button_done.addEventListener("click" , function(){
        var_button_del.remove();
        var_button_done.remove();
        item_name.className = "completed";
    });    

    var_button_del = document.createElement("button");
    var_del = document.createElement("i");
    var_del.className = "far fa-window-close";
    var_button_del.appendChild(var_del);

    var_button_del.addEventListener("click" , function(){
        var_li.remove();
    }); //Automatically adds an event listener when object is created 

    var_li.appendChild(var_button_done);
    var_li.appendChild(var_button_del);

    list[0].appendChild(var_li);
}