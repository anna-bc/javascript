// Task 1: Write a function that takes in an object and returns a new object with all its values as functions that when called, return the original value.
function functionValue(obj) {
    let newObj = {};

    for (key in obj) {
        newObj[key] = () => obj[key];
    }
    return newObj;
}
let user = {
    name: "Sarah",
    surname: "Mille",
    height: 160,
    age: 25,
    breathe: function() { 
        console.log(`${this.name} is breathing!`)
    }
}

console.log(functionValue(user));