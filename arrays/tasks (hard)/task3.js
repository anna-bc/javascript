// Task 3: Write a function that takes an array of integers and returns an array of the unique integers.

function uniqueArr(arr) {
    let newarr = [];
    for (int of arr) {
        if (!newarr.includes(int)) {
            newarr.push(int);
        }
    }
    return newarr;
}

console.log(uniqueArr([1,2,3,4,2,1,5]));