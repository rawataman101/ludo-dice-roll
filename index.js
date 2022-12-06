var dice1 = Math.floor(Math.random() * 6) + 1;
var imageDice1 = "images/dice" + dice1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageDice1);

var dice2 = Math.floor(Math.random() * 6) + 1;
var imageDice2 = "images/dice" + dice2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageDice2);

if (dice1 > dice2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (dice2 > dice1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
