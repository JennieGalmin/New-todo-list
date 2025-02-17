const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector(".list");
const listItems = document.querySelectorAll("li")

const saveToLocalStorage = () => {
    const items = [...listItems].map(item => item.firstChild.textContent);
    localStorage.setItem("value", items)
}


const listText = () => {
    list.insertAdjacentHTML("beforeend", `<li>${input.value}<button class="deleteBtn">x</button></li>`);
    saveToLocalStorage();
    input.value = "";
}


button.addEventListener("click", listText)

list.addEventListener("click", (event) => {
    if(event.target.classList.contains("deleteBtn"))
        event.target.parentElement.remove()
    
})

saveToLocalStorage()
