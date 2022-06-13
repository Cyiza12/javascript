const input = document.querySelector("input");
const submit = document.querySelector("button");
const list_container = document.querySelector(".listcontainer");
const error = document.querySelector(".error");


let listcontainer = [];
console.log("iniput", input);
console.log("submit", submit);
console.log("list_container", list_container);
console.log("listcontainer", listcontainer);


submit.addEventListener("click", () => {
    // if(input.value !== ""){
    listcontainer.push(input.value);
    input.value = "";
    input.focus();

    const newTodo = document.createElement("div");
    const todoNum = document.createElement("span");
    const todoText = document.createElement("p");

    newTodo.className = "one_todo";
    todoNum.className = "num";
    todoText.className = "todo_text";

    listcontainer.map((todo, index) => {
        todoText.innerText = todo;
        todoNum.innerText = index + 1;

        newTodo.appendChild(todoNum);
        newTodo.appendChild(todoText);
        list_container.appendChild(newTodo);
} );
// } else {
//     alert("Input should not be empty");
// }

// if (todos.length > 0) {
//     errorText.style.display = "none";
// } else {
//     errorText.style.display = "block";
// }
 });
