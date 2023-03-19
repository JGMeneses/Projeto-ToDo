//Seleção de elementos
const todoForm = document.querySelector("#ToDo-form");
const todoInput = document.querySelector("#ToDo-input");
const todoList= document.querySelector("#ToDo-List");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edite-input");
const editcancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");
let   oldInputValue;


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
editBtn.classList.add("edit-ToDo")
editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
todo.appendChild(editBtn)


const delteBtn = document.createElement("button")
delteBtn.classList.add("remove-ToDo")
delteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
todo.appendChild(delteBtn)
todoList.appendChild(todo);

// Utilizando dados da localStorage
if (done) {
    todo.classList.add("done");
  }

  if (save) {
    saveTodoLocalStorage({ text, done: 0 });
  }

  todoList.appendChild(todo);

  todoInput.value = "";
;


todoInput.value = "";
};

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};

const updateToDo = (text) =>{

    const ToDos = document.querySelectorAll(".ToDo");

    ToDos.forEach((ToDo) => {
        let todoTitle = ToDo.querySelector("h3")

        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;


            // Utilizando dados da localStorage
             updateTodoLocalStorage(oldInputValue, text);
        };
    });
};


// barra de pesquisa
const getSearchedTodos = (search) => {
    const todos = document.querySelectorAll(".ToDo");

    todos.forEach((ToDo) => {
        const todoTitle = ToDo.querySelector("h3").innerText.toLowerCase();

        ToDo.style.display = "flex";


        if (!todoTitle.includes(search)) {
            ToDo.style.display = "none";
        }
    });
};

// filtro de ToDo
const filterTodos = (filterValue) => {
const todos = document.querySelectorAll(".ToDo");

switch (filterValue) {
    case "all":
    todos.forEach((ToDo) => (ToDo.style.display = "flex"));

    break;

    case "done":
    todos.forEach((ToDo) =>
    ToDo.classList.contains("done")
        ? (ToDo.style.display = "flex")
        : (ToDo.style.display = "none")
    );

    break;

    case "todo":
    todos.forEach((ToDo) =>
        !ToDo.classList.contains("done")
        ? (ToDo.style.display = "flex")
        : (ToDo.style.display = "none")
    );

    break;

    default:
    break;
}
};



// Eventos

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue);
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div") //pegando div mais proxima
    let todoTitle;
    

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("confirmar-ToDo")){
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-ToDo")){
        parentEl.remove();

        // Utilizando dados da localStorage
        removeTodoLocalStorage(todoTitle);
    }

    if(targetEl.classList.contains("edit-ToDo")){
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
});

editcancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
});

editForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const editInputValue = editInput.value

    if(editInputValue) {
        updateToDo(editInputValue);
    }
    
    toggleForms();
})

searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value;
  
    getSearchedTodos(search);
});

eraseBtn.addEventListener("click", (e) => {
    e.preventDefault();

    searchInput.value = "";

    searchInput.dispatchEvent(new Event("keyup"));
});

filterBtn.addEventListener("change", (e) => {
    const filterValue = e.target.value;
  
    filterTodos(filterValue);
});

// Local Storage
const getTodosLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
  
    return todos;
};

const loadTodos = () => {
    const todos = getTodosLocalStorage();
  
    todos.forEach((ToDo) => {
      saveTodo(ToDo.text, ToDo.done, 0);
    });
};

const saveTodoLocalStorage = (ToDo) => {
    const todos = getTodosLocalStorage();
  
    todos.push(ToDo);
  
    localStorage.setItem("todos", JSON.stringify(todos));
};

const removeTodoLocalStorage = (todoText) => {
    const todos = getTodosLocalStorage();
  
    const filteredTodos = todos.filter((ToDo) => ToDo.text != todoText);
  
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
};
  
  const updateTodoStatusLocalStorage = (todoText) => {
    const todos = getTodosLocalStorage();
  
    todos.map((ToDo) =>
        ToDo.text === todoText ? (ToDo.done = !ToDo.done) : null
    );
  
    localStorage.setItem("todos", JSON.stringify(todos));
};
  
  const updateTodoLocalStorage = (todoOldText, todoNewText) => {
    const todos = getTodosLocalStorage();
  
    todos.map((ToDo) =>
        ToDo.text === todoOldText ? (ToDo.text = todoNewText) : null
    );
  
    localStorage.setItem("todos", JSON.stringify(todos));
};
  
loadTodos();