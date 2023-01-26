// Task 1: Create a function that takes in a number as an argument and returns the number of trailing zeroes in its factorial using recursion.

function trailingZeroes(n) {
    let d = n / 5;
    if (d >= 5) {
        return d + trailingZeroes(d);
    } else {
        return d;
    }
}

console.log(trailingZeroes(10));