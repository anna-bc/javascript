// Task 2: Create a function that takes in a number n as an argument and returns the result of raising it to a power p using recursion.

function powP(n, p) {
    if(p == 1) {
        return n;
    }
    else {
        return n * powP(n, p-1);
    }
}

console.log(powP(3,3));