// Task 3: Write a function that takes in an array of numbers and returns the smallest number in the array.

function smallestNum(arr) {
    return arr.reduce((acc, curr) => {
        return Math.min(acc, curr);
    })
}

console.log(smallestNum([1,2,3,4]));