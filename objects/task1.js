// Task 1: Write a function that takes in an object and a key, and returns the value of that key. 
// If the key does not exist, the function should return a default value.

function returnValue(obj, key) {
    let value = obj[key];
    return value;
}

let myObj = {
    name: 'Milo',
    height: 'small'
}

console.log(returnValue(myObj, 'name'));