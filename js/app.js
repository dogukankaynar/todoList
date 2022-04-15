const todoTitle = document.getElementById('todoTitle');
const addBtn=document.getElementById('addBtn')
const text = document.getElementById('todoText')
const todoList = document.querySelector(".todo-menu");
const storage = new Storage();
const ui=new UI();
eventListeners()

function eventListeners() {
addBtn.addEventListener('click',addTodo);
document.addEventListener('DOMContentLoaded',function(){
    let todos =storage.getTodosFromStorage()
    ui.loadAllTodos(todos)
})
todoList.addEventListener('click',deleteTodo)
}

function deleteTodo (e){
 if(e.target.id==='delete'){
     ui.deleteTodoUI(e.target)
     storage.deleteTodoStorage(e.target.parentElement.parentElement.value)
 }
}

function addTodo(e) {
    const title=todoTitle.value;
    const todoText=text.value;
    if(title==''||todoText==''){
       ui.displayMessages();
    }
    else{
        const newTodo= new Todo(title,todoText)
        storage.addTodoToStorage(newTodo);
        ui.addTodoUı(newTodo);
        console.log(newTodo)
    }

    ui.clearInputs(todoTitle,text)
    e.preventDefault();

}
