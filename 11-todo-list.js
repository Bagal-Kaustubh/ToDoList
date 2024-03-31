const todoList = [{
  name: 'go',
  dueDate:'20-01-2024',
}
,{
  name:'get',
  dueDate:'23-01-2024'}];

renderTodoList();
function renderTodoList(){
let todoListHTML = '';


todoList.forEach(function(todoObject,index){

  // const todoObject = todoList[i];
  // const name = todoObject.name;
  // const dueDate = todoObject.dueDate;
  const{name,dueDate}=todoObject;

  const html = `<div>${name}</div> 
  <div>${dueDate}</div> 
  <button onclick ="
  todoList.splice(${index}, 1);
  renderTodoList();
  " class = "delete-todo-button"> delete </button>
  `;
  todoListHTML += html;



});


// for(let i = 0;i< todoList.length;i++){
//   const todoObject = todoList[i];
//   // const name = todoObject.name;
//   // const dueDate = todoObject.dueDate;
//   const{name,dueDate}=todoObject;

//   const html = `<div>${name}</div> 
//   <div>${dueDate}</div> 
//   <button onclick ="
//   todoList.splice(${i}, 1);
//   renderTodoList();
//   " class = "delete-todo-button"> delete </button>
//   `;
//   todoListHTML += html;
// }

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate:dueDate
  // name,dueDate this can be done when the list contents are same
});
 

  inputElement.value='';
  renderTodoList();
  
}