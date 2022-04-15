function Storage() {}
Storage.prototype.addTodoToStorage = function (newTodo) {
  let todos = this.getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
};
Storage.prototype.getTodosFromStorage = function () {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
};
