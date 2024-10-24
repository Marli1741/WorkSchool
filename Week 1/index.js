const ps = require("prompt-sync");
const prompt = ps();

const num1 = parseInt(prompt("Enter a number: "));
const num2 = parseInt(prompt("Enter another number: "));
const operation = prompt("Enter an operation (+, -, /, *): ");


if (operation === '+') {
    result = num1 + num2;
    console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + result);
} else if (operation === '-') {
    result = num1 - num2;
    console.log('The subtraction of ' + num1 + ' and ' + num2 + ' is: ' + result);
} else if (operation === '*') {
    result = num1 * num2;
    console.log('The multiplication of ' + num1 + ' and ' + num2 + ' is: ' + result);
} else if (operation === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
        console.log('The division  of ' + num1 + ' and ' + num2 + ' is: ' + result);
    }
}