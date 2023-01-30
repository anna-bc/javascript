// Task 4: Write a function that takes in an array of numbers and returns the average of all the numbers in the array.

function average(arr) {
    let sum = arr.reduce((acc, curr) => {
        return acc + curr;
    })
    return sum / arr.length;
}

console.log(average([1,2,3,4]));