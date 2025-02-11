const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector(".list");


const listText = () => {
    return list.insertAdjacentHTML("beforeend", `<li>${input.value}</li>` )
}

button.addEventListener("click", listText)