let input = document.getElementById("item-input");
let button = document.getElementById("item-button");
let ul = document.getElementById("item-ul");
let items = document.getElementsByTagName("li");
let itemButtons = document.getElementsByClassName("remove");

function criarElemento() {
    let li = document.createElement("li");

    let Xbutton = document.createElement("button");
    Xbutton.innerHTML = "x";
    Xbutton.className = "remove";

    let text = document.createTextNode(input.value);

    li.appendChild(text);
    li.appendChild(Xbutton);
    ul.appendChild(li);
    input.value = "";

    buttonEvents();
}

function deletar() {
    this.parentElement.remove();
}

function buttonEvents() {
    for (let i = 0; i < itemButtons.length; i++) {
        itemButtons[i].addEventListener("click", deletar);
    }
}
button.addEventListener("click", criarElemento);