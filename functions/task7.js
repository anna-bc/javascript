// Task 7 : Create a function that takes in an numbers and using a loop, returns the sum of all the numbers.

function sumNumbers(numberString) {
    let result = 0;
    for (i = 0; i < numberString.length; i++) {
        result += +numberString.charAt(i);
    }

    return result;
}

console.log(sumNumbers("12345"));