// Task 5: Write a function that takes in an object and returns a new object that only includes the key-value pairs where the value is a number that is within a specific range.

function keyValuePairsNumberRange(obj) {
    let newObj = {};
    for (key in obj) {
        if (typeof obj[key] === 'number' && (obj[key] >= 20 && obj[key] <= 100)) {
            newObj[key] = obj[key];
        }
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

console.log(keyValuePairsNumberRange(user));