// Task 6: Create a function that takes in two numbers as arguments, and using a loop, returns the result of multiplying them together.

let num1 = 2;
let num2 = 3;

function multi(number1, number2) {
    let result = 0;
    for (let i = 0; i < number2; i ++) {
        result += number1;
    }
    return result;
}

console.log(multi(num1, num2));