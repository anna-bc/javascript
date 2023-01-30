// Task 8: Write a function that takes in an array of numbers and returns the index of the last occurrence of a specific number.

function returnLastIdx(arr, num) {
    for (let idx = arr.length -1; idx > 0; idx--) {
        if (arr[idx] == num) {
            return "The last index of the number " + num + " is " +idx;
        }
    }
    return "The number " + num + " could not be found in the array";
}

console.log(returnLastIdx([1,2,3,4,5,6,7,5,9,10], 5));