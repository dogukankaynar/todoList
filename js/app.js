const todoTitle = document.getElementById('todoTitle');
const addBtn=document.getElementById('addBtn')
const text = document.getElementById('todoText')
const storage = new Storage();
eventListeners()

function eventListeners() {
addBtn.addEventListener('click',addTodo);
}

function addTodo(e) {
    const title=todoTitle.value;
    const todoText=text.value;
    if(title==''||todoText==''){
       console.log('title giriniz')
    }
    else{
        const newTodo= new Todo(title,todoText)
        storage.addTodoToStorage(newTodo);
        console.log(newTodo)

    }

    e.preventDefault();

}
