/*
## Part 1
Open `index.html` in your browser. Notice there are 3 buttons: blue, orange and green.
Edit the file `./js/main.js` and add the following functionality:
Clicking on the buttons should change the "theme" of the website:

- When clicking **blue** it should change:
  - **Jumbotron** background color to `#588fbd`
  - **Donate a bike** button background color to `#ffa500`
  - **Volunteer** button background color to `black` and text color to `white`

- When clicking **orange** it should change:
  - **Jumbotron** background color to `#f0ad4e`
  - **Donate a bike** button background color to `#5751fd`
  - **Volunteer** button background color to `#31b0d5` and text color to `white`

- When clicking **green** it should change:
  - **Jumbotron** background color to `#87ca8a`
  - **Donate a bike** button background color to `black`
  - **Volunteer** button background color to `#8c9c08`

Here's an example of how the website should look for the blue button:
![Blue button example](images/blue_clicked.png)
*/


let blueButton = document.querySelector("#blueBtn");
let orangeButton = document.querySelector("#orangeBtn");
let greenButton = document.querySelector("#greenBtn");
let jumbotron = document.querySelector(".jumbotron");
let donateABikeButton = document.querySelector(".btn.btn-primary.btn-lrg");
let volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");


// When clicking **blue**
blueButton.addEventListener("click", clickOnBlue);
function clickOnBlue (){
    jumbotron.style.backgroundColor = "#588fbd";
    donateABikeButton.style.backgroundColor = "#ffa500";
    volunteerButton.style.backgroundColor = "black";
    volunteerButton.style.color = "white";
}

// When clicking **orange** 
orangeButton.addEventListener("click", clickOnOrange);
function clickOnOrange (){
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateABikeButton.style.backgroundColor = "black";
    volunteerButton.style.backgroundColor = "#31b0d5";
    volunteerButton.style.color = "white";
}

// When clicking **green** 
greenButton.addEventListener("click", clickOnGreen);
function clickOnGreen (){
    jumbotron.style.backgroundColor = "#87ca8a";
    donateABikeButton.style.backgroundColor = "#5751fd";
    volunteerButton.style.backgroundColor = "#8c9c08";
}

/*
## Part 2
Just below the buttons, there's a form called **Register with us**.
Continue working in `./js/main.js` to add the following functionality:
When the submit button is pressed, it should check that all the form fields are valid:

- The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
- For the **Email** field also check if it contains the `@` character

For all the fields that invalid, it should make their background color `red`.
IF all the fields are valid, when you click **Submit** it should:

- Display an alert to thank you for filling out the form
- Blank out (make empty) all the text fields

**Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault

*/
let submitButton = document.querySelector("form button");;

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  let formFields = document.querySelectorAll(".form-control");
  let check = true;

// Check email for if it contains the `@` character or if **Email** field is empty
  if(!formFields[0].value.includes("@") || formFields[0].value.length === 0){
    formFields[0].style.backgroundColor = "red";
    check = false;
  } else {
    formFields[0].style.backgroundColor = "transparent";
  };

  // Check if **Your name** and **Describe yourself** fields are empty
  for(i = 1; i < formFields.length; i++) {
    if(formFields[i].value.length === 0){
    formFields[i].style.backgroundColor = "red";
    check = false;
    } else {
    formFields[i].style.backgroundColor = "transparent";
    }
  };

// If all the fields are valid, display an alert to "thank you for filling out the form" and make empty all the text fields
  if(check) {
    formFields.forEach((field) => field.value = " ")
    alert("Thank you for filling out the form.");
  };
})