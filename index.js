const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector(".list");


const listText = () => {
    list.insertAdjacentHTML("beforeend", `<li>${input.value}<button class="deleteBtn">x</button></li>`); 
    input.value = "";
}


button.addEventListener("click", listText)

list.addEventListener("click", (event) => {
    if(event.target.classList.contains("deleteBtn"))
        event.target.parentElement.remove()
    
})