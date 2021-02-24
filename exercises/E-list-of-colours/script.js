/*
## Exercise
* Create a `<select>` element.
* Create a `<p>` element.
* Iterate through the array of colours.
* Each element in the array should add a `<option>` to the `<select>`, where the `<option>` is the element in the array.
* Each `<option>` should have a 'click' event listener to update the contents and colour of the `<p>` with the selected colour.
* All of your HTML should go inside the `<div>` with the id **"content"**.
*/



function listOfColours(colours) {
  let content = document.querySelector("#content");
  // Create a h3 element.
  let h3Element = document.createElement("h3");
  h3Element.innerText = "Choose a Colour";
  content.appendChild(h3Element);

  // Create a `<select>` element.
  let selectElement = document.createElement("select");
  content.appendChild(selectElement);

  // Create a `<p>` element.
  let paragraphElement = document.createElement("p");
  content.appendChild(paragraphElement);
  

  // Iterate through the array of colours.
  colours.forEach((colour) => {
    let optionElement = document.createElement("option");
    optionElement.value= colour;
    optionElement.innerText = colour;
    selectElement.appendChild(optionElement);
    
  })

  selectElement.addEventListener("change", updateParagraph);
    function updateParagraph(e) {
      paragraphElement.innerText = `You have chosen ${e.target.value}!!`;
      paragraphElement.style.color = e.target.value;
    }
    
  
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
