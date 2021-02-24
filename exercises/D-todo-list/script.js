/*
## Exercise

* You should use an `<ul>` for the list and `<li>` tags for the contents.
* Each todo should have an event listener for when they are clicked.
* The event listener should add the line-through style to the todo.
* The event listener should also remove the line-through style conditionally by checking if the style is already applied.
* All of your HTML should go inside the `<div>` with the id **"content"**.
*/

function todoList(todos) {
  let content = document.querySelector("#content")
  let h1Element = document.createElement("h1");
  h1Element.innerText = "Todo List";
  content.appendChild(h1Element);

  // Create `<ul>` element
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);

  // Create `<li>` elements
  todos.forEach((todo) => {
    let liElement = document.createElement("li");
    liElement.innerText = todo.todo;
    unorderedList.appendChild(liElement);

    // Add event listener to add the line-through style to the todo.
    liElement.addEventListener("click", LineThrough);
    function LineThrough(){
      if(liElement.style.textDecorationLine === "line-through"){
        liElement.style.textDecorationLine = "initial";
      } else {
      liElement.style.textDecorationLine = "line-through";
    }
  }
    
  })
  
}



const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);