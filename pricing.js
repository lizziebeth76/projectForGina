let buttonStuff = document.querySelector("#pizza");
let myList = document.querySelector("#doThese");
let inputField = document.querySelector("#userInput");

buttonStuff.addEventListener("click", function() {
    let item = document.createElement("li");
    // item.classList.add("doThese-styling");
    item.innerText = inputField.value;
    containYoStuff.appendChild(item);
    inputField.value = "";
});
item.addEventListener("click", function() {
    containYoStuff.removeChild(item);
});
item.addEventListener("dblclick", function () {
    containYoStuff.removeChild(item);
});