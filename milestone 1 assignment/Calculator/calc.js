// 2. Calculator
// Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
// to perform the operation on the two numbers.

// The calculator function should:
// . Take in two numbers, num1 and num2, and a string representing a mathematical operator, operator.
// . Use a switch statement to determine which operation to perform based on the value of the operator.
// . If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
// operation and store the result in a varia#le called result.
// . If the operator is not one of the valid operators, log "Invalid operator" to the console.

function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case "+":
          result = num1 + num2;  
            break;
        case "-":
          result = num1 - num2;  
            break;
        case "*":
          result = num1 * num2;  
            break;
        case "/":
          result = num1 / num2;  
            break;    
        default:
            console.log("invalid operator.");
            break;
    }
    if (result !== undefined) {
        console.log(`The Result of ${num1} ${operator} ${num2} is ${result}.`);
    }
}


calculator(5, 10, "+");
calculator(10, 10, "-");
calculator(5, 10, "*");
calculator(10, 10, "/");
calculator(10, 5, "%");































