// alert("Hello world!");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";


var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomDiceImageSource1);
image2.setAttribute("src", randomDiceImageSource2);

var winner;
if (randomNumber1 > randomNumber2) winner = "player1 wins!";
else if (randomNumber1 < randomNumber2) winner = "player2 wins!";
else winner = "draw!";

document.querySelector("h1").innerHTML = winner;