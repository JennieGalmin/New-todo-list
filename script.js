const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector(".list"); 

const saveToLocalStorage = () => {
    let items = [...list.querySelectorAll("li")].map(item => item.firstChild.textContent);

    localStorage.setItem("items", JSON.stringify(items));
}

const getFromLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("items")) || [];
    todos.forEach(todo => {
    list.insertAdjacentHTML("beforeend", `<li>${todo}<button class="deleteBtn">Delete</button></li>`)
    })
}

const listText = () => {
    list.insertAdjacentHTML("beforeend", `<li>${input.value}<button class="deleteBtn">Delete</button></li>`);
    saveToLocalStorage();
    input.value = "";
}


list.addEventListener("click", (event) => {
    if(event.target.classList.contains("deleteBtn"))
        event.target.parentElement.remove()
        saveToLocalStorage()
})

document.addEventListener("DOMContentLoaded", getFromLocalStorage)

button.addEventListener("click", listText)
