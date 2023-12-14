
window.addEventListener("DOMContentLoaded", () => {
  //state
  const state = {
    todos: [],
  };
  
  //selectors
  const addButton = document.getElementById("add");
  const newTodoInput = document.getElementById("new-todo-input");
  const todosWrapper = document.getElementById("list-of-todos");
  
  //functions
  const addTodo = () => {
    addTodoToState();
    getTodosFromStateAndUpdateUI();
  };
  
  const addTodoToState = () => {
    const getTodoId = () => new Date().getTime();
    const newTodo = {
      id: getTodoId(),
      text: newTodoInput.value,
    };
    state.todos = [...state.todos, newTodo];
    newTodoInput.value = "";
  };

  const removeTodo = (id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
    getTodosFromStateAndUpdateUI();
  };
  const updateTodo = (id, li, editBut) => {
    const { todos } = state;
    const elementInput = document.createElement("input");
    const elementSubmit = document.createElement("button");
    elementSubmit.innerHTML = "edit";

    li.firstChild.style.display = "none";
    editBut.style.display = "none";
    li.prepend(elementSubmit);
    li.prepend(elementInput);

    elementSubmit.addEventListener("click", () => {
      const newText = elementInput.value;
      li.children.item(2).style.display = "inline";
      editBut.style.display = "inline";
      elementInput.style.display = "none";
      elementSubmit.style.display = "none";
      // czemu zmienia się również oryginalna tablica(todos) kiedy find nie modygikuje tablicy
      const arr = todos.find(el => el.id === id);
      arr.text = newText;
      getTodosFromStateAndUpdateUI();
    });
  };

  //UI updates

  const getTodosFromStateAndUpdateUI = () => {
    const { todos } = state;
    todosWrapper.innerHTML = "";
    todos.forEach((todo) => {
      addNewTodoInUI(todo, todosWrapper);
    });
  };

  const addNewTodoInUI = (todo, todosWrapper) => {
    const elementList = document.createElement("li");
    const elementSpan = document.createElement("span");
    const elementButtonTrash = document.createElement("button");
    const elementImgTrash = document.createElement("img");
    const elementButtonEdit = document.createElement("button");
    const elementImgEdit = document.createElement("img");

    elementSpan.innerText = todo.text;

    elementImgTrash.setAttribute("src", "./images/trash.png");
    elementImgTrash.classList.add("img-trash");
    elementButtonTrash.addEventListener("click", () => removeTodo(todo.id));

    elementImgEdit.setAttribute("src", "./images/edit.svg");
    elementImgEdit.classList.add("img-edit");
    elementButtonEdit.addEventListener("click", () =>
      updateTodo(todo.id, elementList, elementButtonEdit)
    );

    elementButtonTrash.appendChild(elementImgTrash);
    elementButtonEdit.appendChild(elementImgEdit);
    elementList.appendChild(elementSpan);
    elementList.appendChild(elementButtonTrash);
    elementList.appendChild(elementButtonEdit);
    todosWrapper.appendChild(elementList);
  };

  //even listeners
  addButton.addEventListener("click", addTodo);
});