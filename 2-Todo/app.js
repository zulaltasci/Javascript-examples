const inputDom = document.getElementById("task");
const formDom = document.getElementById("form");
const ulDom = document.getElementById("list");

const list = document.createElement("ul");
const addTodo = (e) => {
    e.preventDefault();
    if (inputDom.value != "") {
        const item = document.createElement("li")
        item.innerHTML = inputDom.value;
        inputDom.value = "";
        $('.success').toast('show');
        let closeBtn = document.createElement('span');
        closeBtn.classList.add("close");
        closeBtn.textContent = '\u00D7';
        item.appendChild(closeBtn);
        closeBtn.onclick = removeItem;
        item.onclick = checkItem;
        ulDom.appendChild(item);
    } else {
        $('.error').toast('show');
    }
}

formDom.addEventListener("submit", addTodo);

function removeItem() {
    this.parentElement.remove();
}

function checkItem() {
    this.classList.add('checked');
}