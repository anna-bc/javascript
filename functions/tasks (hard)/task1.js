// Task 1: Create a function that takes in a number as an argument and returns the number of trailing zeroes in its factorial using recursion.

function trailingZeroes(n) {
    if ((n % 5) == 0 && n > 0) {
        return 1 + trailingZeroes(n-1);
    } 
    if (n == 0) {
        return 0;
    }
    return trailingZeroes(n-1);
}

console.log(trailingZeroes(23));