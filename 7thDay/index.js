const toDoForm = document.querySelector(".todo-form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".todo-list");

const TODOS_LS = "toDos",
    FINISHED_TODOS_LS = "finishedToDos";

let toDos = [];
let finishedToDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
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

function loadToDos() {
  const savedToDos = localStorage.getItem(TODOS_LS),
      finishedToDos = localStorage.getItem(FINISHED_TODOS_LS)
  console.log(savedToDos)
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      addToDo(toDo.text);
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