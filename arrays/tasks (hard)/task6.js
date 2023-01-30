// Task 6: Write a function that takes an array of integers and returns an array of all the possible subsets of that array.

function getAllSubsets(arr) {
    return arr.reduce( (subset, curr) => {
        subset.push(subset.map(set => [...set, curr]))
    }, [])
}

console.log(getAllSubsets([1,2,3]));