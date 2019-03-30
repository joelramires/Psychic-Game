// array to store computer choices 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessLeft = 9;
var lettersAlreadyGuessed = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var gameHTML = document.getElementById("game");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");
var $userGuess = document.getElementById("userguess");
var $computerGuess = document.getElementById("computerGuess");
var $lettersAlreadyGuessed = document.getElementById("guessesSoFar");
console.log($lettersAlreadyGuessed);
var $guessesLeft = document.getElementById("guessesLeft");

// function for computer to select random letter from computer choices array


function newGame() {
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

  guessLeft = 9;
  lettersAlreadyGuessed.length = 0;
}

// fuction to reset game(not working)
document.onkeyup = function (event) {
  var userGuess = event.key;
  if (guessLeft > 0) {
    lettersAlreadyGuessed.push(userGuess)

    if (userGuess == computerGuess) {
      wins++;
      newGame()
    } else {
      guessLeft--;

    }
    if (guessLeft == 0) {
      losses++;
      newGame()
    }
  }
  $wins.innerHTML = `${wins}`;
  $losses.innerHTML = `${losses}`;
  $lettersAlreadyGuessed.innerHTML = `${lettersAlreadyGuessed}`;
  $userGuess.innerHTML = `${userGuess}`;
  $guessesLeft.innerHTML = guessLeft;
}

// run newGame() to start game for the first time 

newGame();