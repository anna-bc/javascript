// Task 11: Create a function that takes in a number n as an argument and
// returns the result of finding the nth number in the Fibonacci sequence using recursion.

function fibonacci(n) {
    if(n == 1 ) return 0;
    if(n == 2 ) return 1;
    if(n >= 3) {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(6));