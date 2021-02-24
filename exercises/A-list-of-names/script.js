/*
For each object in the array:
- Add a `<h1>` tag to the html containing the name of the person.
- Add a `<h2>` tag to the html containing the job of the person.
- All of your HTML should go inside the `<div>` with the id **"content"**:
*/


function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach((people) => {

    // Add a `<h1>` tag to the html containing the name of the person
    let h1Element = document.createElement("h1");
    h1Element.innerText = people.name;

    // Add a `<h2>` tag to the html containing the job of the person.
    let h2Element = document.createElement("h2");
    h2Element.innerText = people.job;
    
    content.appendChild(h1Element);
    content.appendChild(h2Element);
  })
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);


