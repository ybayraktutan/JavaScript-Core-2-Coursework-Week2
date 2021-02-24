/*## Exercise

* You should use an unordered list: `<ul>`.
* Each item from the array should be in a `<li>` tag.
* All of your HTML should go inside the `<div>` with the id **"content"**.
*/

function shoppingList(arrayOfShoppingList) {
  let content = document.querySelector("#content")
  let h1Element = document.createElement("h1");
  h1Element.innerText = "Shopping List";
  content.appendChild(h1Element);

  // Create a `<ul>` element.
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);

  // // Create `<li>` elements and iterate over the array of shopping list 
  arrayOfShoppingList.forEach((shopping) => {
    let liElement = document.createElement("li");
    liElement.innerText = shopping;
    unorderedList.appendChild(liElement);
  })
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);


