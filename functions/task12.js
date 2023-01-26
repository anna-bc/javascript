// Task 12: Create a function that takes in a number as an argument and returns the factorial of that number using recursion.

function factorialRecursive(n) {
    if (n == 0) return 1;
    if (n == 1) {
        return 1;
    } else {
        return n * factorialRecursive(n -1);
    }
}

console.log(factorialRecursive(3));