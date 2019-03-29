// array to store alphabet choices 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessLeft = 9;
var lettersAlreadyGuessed = [];
var computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];

var gameHTML = document.getElementById("game");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");
var $userGuess = document.getElementById("userguess");
var $computerGuess = document.getElementById("computerGuess");
var $lettersAlreadyGuessed = document.getElementById("#lettersAlreadyGuessed");

// var computerGuess random number function
var computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)]
function computerGuess(computerChoices) {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
 
function updatelettersAlreadyGuessed() {
  document.getElementById("guessesSoFar").innerHTML  = "Your Guesses so far: " + lettersAlreadyGuessed.join(', ')
}


// fuction to reset game
document.onkeyup = function(event){
  var userGuess = event.key;
  if (guessLeft > 0){
   if(userGuess == computerGuess){
    wins++;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    newGame()
  }
      else {
        guessLeft--;
        document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guessesLeft;

      }
  if(guessLeft == 0){
    loss++;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    newgame()
  }
  }
}
// run newGame() to start game for the first time 

