// Task 1: Write a function that takes an array of integers and returns the sum of the two largest numbers in the array.

function task1(arr) {
    let max = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === max) {
            arr.splice(i, 1);
            break;
        }
    }
    let max2 = Math.max(...arr);
    return max + max2;
}

console.log(task1([1,2,3,4,5]));