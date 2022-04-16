function UI() {}
UI.prototype.clearInputs = (todoTitle, text) => {
  todoTitle.value = "";
  text.value = "";
};
UI.prototype.addTodoUı = (newTodo) => {
  const todoList = document.querySelector(".todo-menu");
  const todoMessage=document.querySelector(".todo-message");
  todoList.innerHTML += `
    <span class='new-todo-title'><p>${newTodo.title}</p><a href="#"><img id='delete' src="https://img.icons8.com/material-sharp/24/000000/delete-trash.png"/></a></span>
     `;
     todoMessage.innerHTML=`<span><p>${newTodo.todoText}</p></span>`
}
UI.prototype.loadAllTodos = (todos) => {
  const todoList = document.querySelector(".todo-menu");
  todos.forEach((todo) => {
    todoList.innerHTML += ` <span><p>${todo.title}</p><a href="#"><img id='delete' src="https://img.icons8.com/material-sharp/24/000000/delete-trash.png"/></a></span>`;
  });
};
UI.prototype.displayMessages=()=>{
    alert('Tüm Alanları Doldurunuz')
}
UI.prototype.deleteTodoUI=(e)=>{
e.parentElement.parentElement.remove();
const todoMessage=document.getElementById('todoMessage')
todoMessage.textContent=''
}