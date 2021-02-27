/*
## Instructions
The `populateTodoList()` function should iterate over the list of todos that we are given at the start, 
it should create a <li> for the todo along with some other stuff that you can find in index.html and below.
The items in the todo list are currently hard-coded into the HTML, 
refactor the code so that this function creates them and adds the following functionality to them:
Each todo should have this HTML inside it:

```html
<span class="badge bg-primary rounded-pill">
  <i class="fa fa-check" aria-hidden="true"></i>
  <i class="fa fa-trash" aria-hidden="true"></i>
</span>
```
The first `<i>` tag needs an event listener that applies a line-through text-decoration styling to the text of the todo. It should remove the styling if it is clicked again.
The second `<i>` tag needs an event listener that deletes the parent `<li>` element from the `<ul>`.
*/

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  // Write your code to create todo list elements with completed and delete buttons here, 
  // all todos should display inside the "todo-list" element.

  for (let todo of todos) {
    
    //Create list Elements
    let liElement = document.createElement("li");
    liElement.className = "list-group-item d-flex justify-content-between align-items-center";
    liElement.innerText = todo.task;

    //Create span Element
    let spanElement = document.createElement("span");
    spanElement.className = "badge bg-primary rounded-pill";
    let trashButton = document.createElement("i");
    trashButton.className = "fa fa-trash";
    let checkButton = document.createElement("i");
    checkButton.className = "fa fa-check";
    
    //Add event listener to check button
     checkButton.addEventListener("click", () => {
       if (liElement.style.textDecoration === "none") {
        liElement.style.textDecoration = "line-through"; 
        todo.completed = true;         
       } else {
         liElement.style.textDecoration = "none";
         todo.completed = false;         
       }
     });

    //Add event listener to trash button
     trashButton.addEventListener("click", () => {
       liElement.remove();
     });


     // Append all elements inside the "todo-list" element.
    list.appendChild(liElement);
    liElement.appendChild(spanElement);
    spanElement.appendChild(checkButton);
    spanElement.appendChild(trashButton);

  };

}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. 
// These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let inputElement = document.querySelector("#todoInput");
  
  if (inputElement.value !== "") {
    let newTodo = {};
    newTodo.task = inputElement.value;
    newTodo.completed = false;
    todos.push(newTodo);
    let addedTodo = todos.slice(todos.length - 1);
    populateTodoList(addedTodo);
    inputElement.value = "";
  }
}


// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
