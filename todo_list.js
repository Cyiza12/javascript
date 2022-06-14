const input = document.querySelector("input");
const submit = document.querySelector("button");

const listElements = document.querySelector(".list_container");
const error = document.querySelector(".error");

let listcontainer = [];

submit.addEventListener("click", () => {
	listcontainer.push(input.value);

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
		listElements.appendChild(newTodo);
	});

	input.value = "";
	input.focus();
});
