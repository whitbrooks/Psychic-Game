// VARIABLES

var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guesses_left = 10;
var guesses_so_far = [];

// FUNCTIONS

// computer selects letter
var psychicChoice = options[Math.floor(Math.random()*options.length)];
console.log(psychicChoice);

// user clicks key to start game
document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guesses_so_far.push(userGuess);
    console.log(userGuess);

    // compare user guess to computer selection and update wins and guesses left
    if (userGuess==psychicChoice) {
        wins++;
        guesses_left = 10;
        guesses_so_far = [];    
        psychicChoice = options[Math.floor(Math.random()*options.length)];
        console.log(wins);
        console.log(psychicChoice);
    } else {
            guesses_left--; 
            console.log(guesses_left);
            console.log(psychicChoice);
        }

    // end game when guesses left reaches zero
    if (guesses_left==0) {
        alert("Game over! Try again.");
        wins = 0;
        losses = 0;
        guesses_left = 10;
        guesses_so_far = [];    
        psychicChoice = options[Math.floor(Math.random()*options.length)];
        console.log(psychicChoice);

    }
    

    // update html
    var html = 
    "<p>Guess what letter I'm thinking of.</p>" + 
    "<p>Wins: " + wins + "</p>" + 
    "<p>Guesses left: " + guesses_left + "</p>" +
    "<p>Guesses so far: " + guesses_so_far.join() + "</p>"  
    
    document.querySelector('#game').innerHTML = html;

    }