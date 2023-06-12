//1. The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.



// Define the input string
var input = "Hello, world!";

// Define the function to reverse the string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Define the function to be executed after the delay
function delayedReverse() {
  var reversedString = reverseString(input);
  console.log(reversedString);
}

// Call setTimeout to delay the execution of delayedReverse by 2 seconds
setTimeout(delayedReverse, 2000);
