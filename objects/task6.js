// Task 6: Write a function that takes in an object and a key, and returns the number of characters in the value of that key.

function countChar(obj, key) {
    if(typeof obj[key] === 'string') {
        return obj[key].length;
    }
    return "The value for the provided key is not a string";
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

console.log(countChar(user, "height"));