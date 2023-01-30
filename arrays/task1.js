// Taks 1: Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.

function sumArr(arr) {
    return arr.reduce((acc, curr) => {
        return acc + curr;
    }, 0)
}

console.log(sumArr([1,2,3,4]));