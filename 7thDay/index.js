const toDoForm = document.querySelector(".todo-form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".todo-list"),
    finishedToDoList = document.querySelector(".finished-todo-list");

const TODOS_LS = "toDos",
    FINISHED_TODOS_LS = "finishedToDos";

let toDos = [];
let finishedToDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function saveFinishedToDos() {
  localStorage.setItem(FINISHED_TODOS_LS, JSON.stringify(finishedToDos))
}

function deleteToDo(event) {
  const button = event.target;
  const li = button.parentNode;
  toDoList.removeChild(li)

  const cleanToDo = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
  toDos = cleanToDo;
  saveToDos(toDos);
}

function finishToDo() {

}

function addToDo(text) {
  // create elements
  const li = document.createElement("li"),
      deleteBtn = document.createElement("button"),
      finishBtn = document.createElement("button"),
      span = document.createElement("span"),
      newId = toDos.length + 1;
  
  // bind the text 
  deleteBtn.innerText = "🚫";
  finishBtn.innerText = "✅";
  span.innerText = text;

  // add eventlistenr for two buttons
  deleteBtn.addEventListener("click", deleteToDo);
  finishBtn.addEventListener("click", finishToDo);

  li.appendChild(deleteBtn);
  li.appendChild(finishBtn);
  li.appendChild(span);
  li.id = newId;

  toDoList.appendChild(li);

  const toDo = {
    text: text,
    id: newId
  }
  toDos.push(toDo)
  saveToDos(toDo);
}

function addFinishToDo(text) {
  const li = document.createElement("li"),
      deleteBtn = document.createElement("button"),
      reloadBtn = document.createElement("button"),
      span = document.createElement("span"),
      newId = finishedToDos.length + 1;
  
  deleteBtn.innerText = "🚫";
  reloadBtn.innerText = "🆙";
  span.innerText = text;

  deleteBtn.addEventListener("click", deleteToDo);
  // reloadBtn.addEventListener("click", reloadToDo);

  li.appendChild(deleteBtn);
  li.appendChild(reloadBtn);
  li.appendChild(span);
  li.id = newId;
  
  finishedToDoList.appendChild(li);

  const finishedToDo = {
    text: text,
    id: newId
  }

  finishedToDos.push(finishedToDo)
  saveFinishedToDos();
}

function loadToDos() {
  const savedToDos = localStorage.getItem(TODOS_LS),
      finishedToDos = localStorage.getItem(FINISHED_TODOS_LS);
  
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      addToDo(toDo.text);
    })
  }

  if (finishedToDos !== null) {
    const parsedToDos = JSON.parse(finishedToDos);
    parsedToDos.forEach(function (toDo) {
      addFinishToDo(toDo.text)
    })
  }
}
function handleSubmit(event) {
  event.preventDefault();
  const text = toDoInput.value;
  addToDo(text);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);

}

init();