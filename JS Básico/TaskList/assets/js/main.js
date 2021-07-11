//constants for element creation
const li = "li";
const btn = "button";
const liClasses = ["task", "list-element"];
const liBtnClasses = ["btn", "btn-delete"];

//selected html elements
const input = document.querySelector("input");
const btnInput = document.querySelector(".btn-input");
const taskList = document.querySelector(".task-list");
const body = document.querySelector("body");

//eventListeners
btnInput.addEventListener("click", function () {
  if (!input.value) return;
  addTarefa();
  clearInput();
  salvarTarefas();
});
body.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    if (!input.value) return;
    addTarefa();
    clearInput();
    salvarTarefas();
  }
});
body.addEventListener("click", function (event) {
  const el = event.target;
  if (el.classList.contains("btn-delete")) {
    if (confirm("Você tem certeza?")) removeTarefa(el);
  }
});

//load saved tasks
loadTarefas();

function clearInput() {
  input.value = "";
  input.focus();
}

//Todo manipulation functions
function addTarefa() {
  const el = criaTarefa();
  const button = criaBotaoApagar();

  taskList.appendChild(el);
  el.appendChild(button);
}

function removeTarefa(element) {
  const parent = element.parentElement;
  parent.remove();
  salvarTarefas();
}

function criaTarefa() {
  let el = criaElemento(li);
  el.textContent = input.value;
  return addClass(el, liClasses);
}

function criaBotaoApagar() {
  let button = criaElemento(btn);
  button.textContent = "APAGAR";
  button.setAttribute("title", "Apagar essa tarefa");
  return addClass(button, liBtnClasses);
}

function addClass(element, classes) {
  for (let i of classes) {
    element.classList.add(i);
  }
  return element;
}

function criaElemento(childType) {
  return document.createElement(childType);
}

function salvarTarefas() {
  const liTarefas = body.querySelectorAll("li");
  const todoList = [];
  for (let task of liTarefas) {
    let text = task.innerText.replace("APAGAR", " ").trim();
    todoList.push(text);

    const tarefasJSON = JSON.stringify(todoList);
    localStorage.setItem("toDos", tarefasJSON);
  }
}

function loadTarefas() {
  const tarefa = localStorage.getItem("toDos");
  const todoList = JSON.parse(tarefa);
  for (let task of todoList) {
    let el = criaElemento(li);
    el.textContent = task;
    el = addClass(el, liClasses);
    const button = criaBotaoApagar();

    taskList.appendChild(el);
    el.appendChild(button);
  }
}
