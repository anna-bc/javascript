// task 9: Write a function that takes in an array of numbers and returns a new array of numbers that are in sorted order.

function sort(arr) {
    let sortedArr = [];
    let done = false;
    while(!done) {
        done = true;
        for(i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                done = false;
                let tmpVal = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = tmpVal;
            }
        }
    }
    return arr;
}


console.log(sort([4,2,7,3,5,9,8,1]));