// Variables

var wins = 0
var losses = 0
var guesses_left = 9
var guesses_so_far = "" 

// Define Functions

$(document).ready(function() {

    document.onkeyup = function() {
        var guesses_so_far = String.fromCharCode(event.keyCode).
        toLocaleLowerCase();

        console.log(guesses_so_far);
        }

    // $("#wins").on("click", function() {
    //     ;
    //   });

    // $("#random-button").on("click", function() {


    // var random = Math.floor(Math.random() * 1000) + 1;

    // $("#random-number").text(random);


});

// user makes a guess


// computer selects random letter
// capture selections
// compare user and computer selections 
// Display result to user 


// if user guess is correct, wins go up by 1
// if user guess is incorrect, guess is recorded and guesses left goes down by 1
// if user guesses incorrectly 9 times, losses go up by 1, and guesses so far is cleared

// Call Functions


