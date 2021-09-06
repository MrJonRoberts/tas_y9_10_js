console.log("CONDITIONALS");

function outputToMsg(msg){
    let msgElt = document.getElementById("msg");
    msgElt.innerHTML = msg;
}

var name = "Fred";
var age = 15;
var favColour = "Purplish";
var carOwned = "Ford Mustang";
var bankBalance = 3000000.01;
var isItRaining = false;

// check name
if (name === "Mr Roberts"){
  //  console.log("Hello "+ name);
    outputToMsg("Hello "+ name);
} else {
  //  console.log("You are the wrong person");
    outputToMsg("You are the wrong person");
}

// age
if (age > 18){
    outputToMsg("You can vote and buy alcohol now - but please show ID")
} else {
    let diff = 18 - age;
    msg = "Please come back in "+ diff + " years";
    outputToMsg(msg);
}
