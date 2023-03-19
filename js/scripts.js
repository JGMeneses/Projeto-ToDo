//Seleção de elementos
const todoForm = document.querySelector("#ToDo-form");
const todoInput = document.querySelector("#ToDo-input");
const todoList= document.querySelector("#ToDo-List");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edite-input");
const editcancelEditBtn = document.querySelector("#cancel-edit-btn");

// Funções  
const saveTodo = (text) => {
const todo = document.createElement("div");
todo.classList.add("ToDo");

const todoTitle = document.createElement("h3");
todoTitle.innerText = text;
todo.appendChild(todoTitle)



const doneBtn = document.createElement("button")
doneBtn.classList.add("confirmar-ToDo")
doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
todo.appendChild(doneBtn)

const editBtn = document.createElement("button")
editBtn.classList.add("edit-todo")
editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
todo.appendChild(editBtn)

const delteBtn = document.createElement("button")
delteBtn.classList.add("remove-ToDo")
delteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
todo.appendChild(delteBtn)

todoList.appendChild(todo);

todoInput.value = "";
}

// Eventos

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue);
    }
});