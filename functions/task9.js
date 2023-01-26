// Task 9: Create a function that takes in a string as an argument and returns true if it is a palindrome, and false if it is not.

function checkIfPalindrome(myString) {
    let palindrome = true;
    for(let i = 0; i < myString.length; i++) {
        if(myString.charAt(i) != myString.charAt(myString.length -1 - i)) {
            return false;
        }
    }
    return palindrome;
}

console.log(checkIfPalindrome("ottso"));