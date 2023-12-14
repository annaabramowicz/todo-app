// helpers
// ?????????????
// zamiast const getNewId = new Date().getTime();
// kiedy tak się zrobi to znika wszystko przy usuwaniu
const getNewId = () =>  new Date().getTime();

window.addEventListener('DOMContentLoaded', () => {
  const state = {
    todos: [],
  };

  // selectors
  const addButton = document.getElementById('add');
  const todosWrapper = document.getElementById('list-of-todos');
  const newTodoInput = document.getElementById('new-todo-input');

  // functions
  const addNewTodoInUI = (todosWrapper, todo) => {
    const listElem = document.createElement('li');
    const spanElem = document.createElement('span');
    const buttonElem = document.createElement('button');
    const imgElem = document.createElement('img');

    imgElem.setAttribute('src', './images/trash.png');
    imgElem.classList.add('image');
    spanElem.innerText = todo.text;

    buttonElem.appendChild(imgElem);
    buttonElem.addEventListener('click', () => removeTodo(todo.id));
    listElem.appendChild(spanElem);
    listElem.appendChild(buttonElem);
    todosWrapper.appendChild(listElem);
  };
  //
  const getTodosFromStateAndShowInUI = () => {
    //// ?????????
    //zamiast const state.todos;
    //?????
    //  mozna besposrednio odwołac sie tak? state.todos.forEach((todo) => {
    const { todos } = state;
    //???
    //czy mozemy to mniej rozpisac czemu kiedy nie tej lini to dodaja sie wielokrotnosci?
    todosWrapper.innerHTML = '';

   todos.forEach((todo) => {
      addNewTodoInUI(todosWrapper, todo);
    });
  };

  const addNewTodo = () => {
    const newTodo = {
      id: getNewId(),
      text: newTodoInput.value,
    };
    ///?????????????????????? zamiast
    // state.todos.push(newTodo);
    state.todos = [...state.todos, newTodo];
    newTodoInput.value = '';
    getTodosFromStateAndShowInUI();
  };
  //?????
  // // czy mozna to przepisac w taki sposób, używajac destrukturyzacji?
  // const removeTodo = (id) => {
  //   //nie dziala
  //   let { todos } = state;
  //   todos = todos.filter((todo) => todo.id !== id);
  //   getTodosFromStateAndShowInUI();
  // };
  const removeTodo = id => {
    state.todos = state.todos.filter((t) => t.id !== id);
    getTodosFromStateAndShowInUI();
  };

  // listeners
  addButton.addEventListener('click', addNewTodo);
});