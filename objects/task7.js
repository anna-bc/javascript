// Task 7: Write a function that takes in an object and an array of keys, and returns a new object that only includes the key-value pairs where the key is not in the array.

function noKey(obj, keys) {
    let newObj = {};
    for (key in obj) {
        if (!keys.includes(key)) {
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

console.log(noKey(user, ["height", "name"]));