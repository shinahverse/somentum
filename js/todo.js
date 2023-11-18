/**
 * todo 리스트 
 */

const todoForm = document.getElementById("frmTodo");
const todoInput = document.querySelector("#frmTodo input");
const todoList = document.getElementById("lstTodo");

const TODOS_KEY = "todos";

let toDos = [];

/**
 * todo 항목을 저장하는 함수
 */
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/**
 * todo 항목을 삭제하는 함수
 */
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

/**
 * todo리스트 출력하는 함수
 */
function displayTodo(todo){
    // console.log("displayTodo>>>", todo);
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);
    todoList.appendChild(li);
}

/**
 * todo form 에 입력된 값을 변수에 저장하고 
 * form 의 내용은 지우는 함수
 * @param {*} event 
 */
function handleSubmitTodo(event){
    event.preventDefault();
    const valueToDo = todoInput.value;
    todoInput.value = "";
    const todoObj = {
        text: valueToDo,
        id: Date.now(),
    };
    toDos.push(todoObj);
    displayTodo(todoObj);
    saveToDos();    
}

todoForm.addEventListener("submit", handleSubmitTodo);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(displayTodo);
}