// Task 3: Create a function that takes in a number and a callback function as an argument, then 
// calls the callback function with the result of the number squared, passed through another callback function 
// that takes the result and returns true if the number is even, and false if odd

function first(cb, num) {
    let sqrt = num * num;
    return cb(sqrt);
}

function second(num) {
    return isEven(num);
}

function isEven(num) {
    if ((num % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(first(second, 5));