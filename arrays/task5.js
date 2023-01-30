// Task 5: Write a function that takes in an array of numbers and returns a new array of only the even numbers

function showEven(arr) {
    let evenArr = [];
    for(let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) === 0) {
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}

console.log(oddsofArrays([1,2,3,4,5,6,7,8,9,10]));   