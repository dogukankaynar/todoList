function UI() {}
UI.prototype.clearInputs = (todoTitle, text) => {
  todoTitle.value = "";
  text.value = "";
};
UI.prototype.addTodoUı = (newTodo) => {
  const todoList = document.querySelector(".todo-menu");
  todoList.innerHTML += `
    <span><p>${newTodo.title}</p><a href="#"><img src="https://img.icons8.com/material-sharp/24/000000/delete-trash.png"/></a></span>
     `;
};
UI.prototype.loadAllTodos = (todos) => {
  const todoList = document.querySelector(".todo-menu");
  todos.forEach((todo) => {
    todoList.innerHTML += ` <span><p>${todo.title}</p><a href="#"><img src="https://img.icons8.com/material-sharp/24/000000/delete-trash.png"/></a></span>`;
  });
};
