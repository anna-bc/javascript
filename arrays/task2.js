// Task 2: Write a function that takes in an array of numbers and returns the largest number in the array.

function largestNum(arr) {
    return arr.reduce((acc, curr) => Math.max(acc, curr))
}
console.log(largestNum([1,2,3,4]));