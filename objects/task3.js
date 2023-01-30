// Task 3: Write a function that takes in an object and a key, and returns true if the value associated with that key is a function and false otherwise.

function isKeyFunction(obj, key) {
    if (typeof obj[key] === 'function') return true;
    return false;
}


let user = {
    name: "Sarah",
    surname: "Mille",
    height: 160,
    breathe: function() { 
        console.log(`${this.name} is breathing!`)
    }
}

console.log(isKeyFunction(user, "breathe"));