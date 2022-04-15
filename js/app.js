const todoTitle = document.getElementById('todoTitle');
const addBtn=document.getElementById('addBtn')
const text = document.getElementById('todoText')
const storage = new Storage();
const ui=new UI();
eventListeners()

function eventListeners() {
addBtn.addEventListener('click',addTodo);
document.addEventListener('DOMContentLoaded',function(){
    let todos =storage.getTodosFromStorage()
    ui.loadAllTodos(todos)
})
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
