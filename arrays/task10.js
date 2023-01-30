// Task 10: Write a function that takes in an array of numbers and returns a new array of numbers that are in reverse sorted order.

function numReverse(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >=0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
console.log(numReverse([1,2,3,4,5]));
