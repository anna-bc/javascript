// Task 10: Create a function that takes in a number as an argument and returns the result of finding the factorial of that number.

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++ ) {
        result *= i;
    }

    return result;
}

console.log(factorial(3));