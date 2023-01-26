// Task 4: Create a function that takes in a number as an argument and returns true if it is even and false if it is odd.

function oddOrEven(num) {
    if((num % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(oddOrEven(5));