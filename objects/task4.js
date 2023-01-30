// Task 4: Write a function that takes in an object and returns a new object that only includes the key-value pairs where the key is a string of a specific length.

function keyValuePair5(obj) {
    let newObj = {};
    for(key in obj) {
        if(typeof obj[key] === 'string' && obj[key].length === 5) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let user = {
    name: "Sarah",
    surname: "Mille",
    height: 160
}
console.log(keyValuePair5(user));