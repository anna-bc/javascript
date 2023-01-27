// Task 4: Create a function that takes in a string and a callback function as an argument, then calls the callback function with the 
// result of the string reversed, passed through another callback function that takes the result and returns the number of vowels in the string.

function first(myString, cb) {
    let reversed = "";
    for (let i = myString.length - 1; i >= 0; i--) {
        reversed += myString.charAt(i);
    }
    return cb(reversed);
}

console.log(first("Hello", (rev) => {
    let vowels = "aeiou";
    let lowString = rev.toLowerCase();
    let count = 0;
    for (let i = 0; i < lowString.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (lowString.charAt(i) == vowels.charAt(j)) {
                count++;
            }
        }
    }
    return count;
}));