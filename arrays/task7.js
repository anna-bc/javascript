// Task 7: Write a function that takes in an array of numbers and returns the index of the first occurrence of a specific number.

function returnIdx(arr, num) {
    for (idx in arr) {
        if (arr[idx] == num) {
            return "The index of the number " + num + " is " +idx;
        }
    }
    return "The number " + num + " could not be found in the array";
}

console.log(returnIdx([1,2,3,4,5,6,7,8,9,10], 5));

for (num of [1,2,3,4,5,6,7,8,9,10]) {
    console.log(num);
}