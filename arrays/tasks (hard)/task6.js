// Task 6: Write a function that takes an array of integers and returns an array of all the possible subsets of that array.

function getAllSubsets(arr) {
    return arr.reduce( (subset, curr) => {
        subset.concat(subset.map(set => [curr, ...set]))
    }, [[]])
}

console.log(getAllSubsets([1,2,3]));
// [], [1] 2 3 11 12 13 21 22 23 31 32 33 123

[] 1
[1] 2
1,2 