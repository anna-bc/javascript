// Task 2: Write a function that takes an array of integers and returns the second smallest number in the array.

function task2(arr) {
    let min = Math.min(...arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === min) {
            arr.splice(i, 1);
            break;
        }
    }
    let min2 = Math.min(...arr);
    return min2;
}

console.log(task2([1,2,3,4,5]));