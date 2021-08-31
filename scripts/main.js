console.log("javascript enabled");


// alert("JS is Working");

console.log("JS is Working");

msgElt = document.getElementById("msg");

msgElt.innerHTML = "<h2>JS is Working!!!</h2>";


// this is a comment.
// # is a comment in python

// variables
// PYTHON :    name = "Fred"

let name = "Fred";   // constant - cannot change the value
var age = 21;

// create a string
var dayOfWeek = "Tuesday";  // a bunch of characters inside quotes.

// create a integer
var numberOfEyes = 2;

// create a float:
var tempInDegC = 28.5;

// create a boolean:
var isItRaining = true;   // in python Booleans are True / False.

// hello fred, with 2 eyes, today is tuesday and it is 28.5 deg C and you are 21 years old.

let text = "Hello "+ name + ", with "+ numberOfEyes + " eyes, today is "+
    dayOfWeek + " and it is "+ tempInDegC + " deg C and you are "+ age + " years old.";

console.log(text);
msgElt.innerHTML = text;

// button code
var score = 0;

function btnClicked(){
    score = score + 1;   // score ++;
    msgElt.innerHTML = score;
}

btnElt = document.getElementById("btnCC");
btnElt.addEventListener("click", btnClicked);

