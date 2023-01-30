// Task 4: Write a function that takes two arrays and returns an array of all elements that exist in both arrays.

function subset(arr1, arr2) {
    let newArr = [];
    for (arr1Item of arr1) {
        console.log(arr1Item);
        if (arr2.includes(arr1Item)) {
            newArr.push(arr1Item);
        }
    }
    return newArr;
}

console.log(subset([[1,2,3,4,5]], [9,8,7,6,2,5,3,1]));