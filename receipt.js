let form = document.getElementById("form");
let addItems = document.getElementById("add-items");
let formContainer = document.getElementById("flex-forms");

// function to add add new input boxes on click.

addItems.addEventListener("click" , function(){
    let inputDiv = document.createElement("div");
    let input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "receipt-form item-spec");
    input1.setAttribute("name", "item");
    let input2 = document.createElement("input");
    input2.setAttribute("type", "number");
    input2.setAttribute("class", "receipt-form item-spec");
    input2.setAttribute("name", "item");
    let input3 = document.createElement("input");
    input3.setAttribute("type", "number");
    input3.setAttribute("class", "receipt-form item-spec");
    input3.setAttribute("name", "item");

    inputDiv.appendChild(input1);
    formContainer.appendChild(inputDiv);
    inputDiv.appendChild(input2);
    formContainer.appendChild(inputDiv);
    inputDiv.appendChild(input3);
    formContainer.appendChild(inputDiv);
    
})