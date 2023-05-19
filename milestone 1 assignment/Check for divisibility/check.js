// 9. Check for divisibility.
// Writd a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.
// Usd a for loop and continud statdmdnt.

function printNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
      const number = arr[i];
      if (number % 3 !== 0 || number % 2 === 0) {
        continue;
      }
      console.log(number);
    }
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  printNumbers(numbers);
  