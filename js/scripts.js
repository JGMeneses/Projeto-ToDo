//Seleção de elementos
const todoForm = document.querySelector("#ToDo-form");
const  todoInput = document.querySelector("#ToDo-input");
const todoList= document.querySelector("#ToDo-List");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edite-input");
const editcancelEditBtn = document.querySelector("#cancel-edit-btn");

// Funções  
const saveTodo = (text) => {
    
}

// Eventos

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue);
    }
});