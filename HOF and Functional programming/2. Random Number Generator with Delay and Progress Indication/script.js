// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.

// Define the delay in milliseconds
var delay = 3000;

// Define the function to generate a random number
function generateRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
  console.log("Generated random number:", randomNumber);
}

// Define the function to be executed after the delay
function delayedRandomNumber() {
  var timeRemaining = delay / 1000;
  
  // Define the function to display the time remaining
  function displayTimeRemaining() {
    console.log("Time remaining:", timeRemaining, "seconds");
    timeRemaining--;
  }
  
  // Call setInterval to display the time remaining every second
  var timer = setInterval(function() {
    displayTimeRemaining();
    if (timeRemaining < 0) {
      clearInterval(timer);
      generateRandomNumber();
    }
  }, 1000);
}

// Call setTimeout to delay the execution of delayedRandomNumber
setTimeout(delayedRandomNumber, delay);
