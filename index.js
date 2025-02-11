const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector(".list");

const inputTodo = () => {
    return console.log(input.value)
}

button.addEventListener("click", inputTodo)

