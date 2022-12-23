// Define Input______________
const todoFromInput = document.querySelector('#todo-from-input');
const todoListInput = document.querySelector('#todo-list-input-i');
const todoDateImput = document.querySelector('.todo-date-imput');
const todoCategoryInput = document.querySelector('#todo-category-input-i');

// Define  Output_____________
const todolistfilterOutput = document.querySelector('#todo-list-filter-output-i');
const todoListOutput = document.querySelector('.todo-list-output');



//Load all events___________
loadEvents();
function loadEvents() {
  // Add Default todo events 
  document.addEventListener('DOMContentLoaded', defaultTodo);
  

  // Add todo events
  todoFromInput.addEventListener('submit', addTodo);

  // Remove todo events
  todoListOutput.addEventListener('click', removeTodo);

  // Filter todo events
  todolistfilterOutput.addEventListener('keyup', filterTodo);

  //filterSwitch("All");

  //If the date is past
  document.addEventListener('DOMContentLoaded', getdate);
  todoFromInput.addEventListener('submit', getdate);
}

//<<<<<<<<<<___Create Date___>>>>>>>>>>
let now = new Date();
let day = ("0" + now.getDate()).slice(-2);
let month = ("0" + (now.getMonth() + 1)).slice(-2);
let today = now.getFullYear() + "-" + (month) + "-" + (day);

document.getElementById("dateid").value = today;
//_____________End Create Date__________________





/*
---------------------------------------------------- 
===================Create Todo====================== 
----------------------------------------------------
*/


// Add Todo______ 
function addTodo(e) {

  // Create li element
  const todoNameLi = document.createElement('li');
  todoNameLi.className = ('todo-li-create'); // Create Class   
  todoNameLi.id = "todoLiCreate";

  // Create todo name
  const todoNameSpan = document.createElement('span');
  todoNameSpan.classList.add('todo-Name-create');
  todoNameSpan.appendChild(document.createTextNode(todoListInput.value));
  todoNameLi.appendChild(todoNameSpan);


  // Create Date
  const todoDateSpan = document.createElement('span');
  todoDateSpan.classList.add('todo-date-create');
  todoDateSpan.appendChild(document.createTextNode(todoDateImput.value));
  todoNameLi.appendChild(todoDateSpan);

  // Create category
  const todoCategorySpan = document.createElement('span');
  todoCategorySpan.classList.add('todo-category-create');
  todoCategorySpan.appendChild(document.createTextNode(todoCategoryInput.value));
  todoNameLi.appendChild(todoCategorySpan);

  // Done button
  const doneButton = document.createElement('button');
  doneButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  doneButton.classList.add('done-btn');
  todoNameLi.appendChild(doneButton);



  // Dlete button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteButton.classList.add('delete-btn');
  todoNameLi.appendChild(deleteButton);



  todoListOutput.appendChild(todoNameLi);

  todoListInput.value = '';
  e.preventDefault()
}
//_____________End Add Todo__________________



/*
---------------------------------------------------- 
================Remove and Done====================
----------------------------------------------------
*/


// Remove todo events______
function removeTodo(e) {
  //console.log(e.target.classList);
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  }
  //Done
  if (e.target.classList.contains('done-btn')) {
    e.target.parentElement.classList.toggle("done");
  }
}
//_____________End Remove and Done__________________




/*
---------------------------------------------------- 
======================Filters====================== 
----------------------------------------------------
*/


// Search Filter
function filterTodo(e) {
  const text = e.target.value.toLowerCase();


  document.querySelectorAll('.todo-li-create').forEach(function (todo) {
    //console.log(todo);
    const item = todo.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      todo.style.display = 'flex';
    }
    else {

      todo.style.display = 'none';
    }
  })
}
//_____________End Search filter __________________


//Switch filter___
function filterSwitch(c) {
  switch (c) {
    case 'All':
      filterOptions(c)
      break;
    case 'Hushållsarbete':
      filterOptions(c)
      break;
    case 'Jobb':
      filterOptions(c)
      break;
    default:
      break;
  }
}

function filterOptions(c) {
  document.querySelectorAll('.todo-li-create').forEach(function (todo) {
    const option = todo.querySelector('.todo-category-create').innerText;
    if (c == 'All' || option === c) {
      todo.style.display = 'flex';
    }
    else if (option != c) {
      todo.style.display = 'none';
    }
  })
}
//_____________End Switch filter__________________




/*
---------------------------------------------------- 
================Defult input values================= 
----------------------------------------------------
*/


// Defult todo list
const defaultList = [
  {
    todoName: "Hello world",
    todoDate: "2022-11-10",
    todoCategory: "Jobb",

  },
  {
    todoName: "Hej Värden",
    todoDate: today,
    todoCategory: "Jobb",

  },
  {
    todoName: "Default Todo",
    todoDate: "2022-12-15",
    todoCategory: "Hushållsarbete"
  }
]
// Show defult value
function defaultTodo() {
  defaultList.forEach(item => {
    // Create li element
    const todoNameLi = document.createElement('li');
    todoNameLi.className = ('todo-li-create'); // Create Class   
    todoNameLi.id = "todoLiCreate";

    // Create todo name
    const todoNameSpan = document.createElement('span');
    todoNameSpan.classList.add('todo-Name-create');
    todoNameSpan.appendChild(document.createTextNode(item.todoName));
    todoNameLi.appendChild(todoNameSpan);


    // Create Date
    const todoDateSpan = document.createElement('span');
    todoDateSpan.classList.add('todo-date-create');
    todoDateSpan.appendChild(document.createTextNode(item.todoDate));
    todoNameLi.appendChild(todoDateSpan);

    // Create category
    const todoCategorySpan = document.createElement('span');
    todoCategorySpan.classList.add('todo-category-create');
    todoCategorySpan.appendChild(document.createTextNode(item.todoCategory));
    todoNameLi.appendChild(todoCategorySpan);

    // Done button
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    doneButton.classList.add('done-btn');
    todoNameLi.appendChild(doneButton);

    // Dlete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoNameLi.appendChild(deleteButton);

    todoListOutput.appendChild(todoNameLi);
  })
}
//_____________End Defult input values__________________



//_____________If the date is past__________________
function getdate() {
  document.querySelectorAll('.todo-date-create').forEach(function (todo) {    
  const todoDate = todo.textContent;
  console.log(todoDate);       
   if (todoDate < today) {
     todo.style.color = "red";
   }      
 })
}
//_____________End If the date is paste__________________