// Task 5: Create a function that takes in a string as an argument and returns the string with all the characters in reverse order.

function reverseString(myString) {
    let reverseString = "";
    for (let i = myString.length; i > 0; i--) {
        reverseString += myString.charAt(i);
    }
    return reverseString;
}

console.log(reverseString("Hello World"));