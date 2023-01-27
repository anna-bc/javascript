//Task 2: Create a function that takes in a string as an argument and returns the number of vowels in the string using a loop.
function countVowels(myString) {
    let lowerString = myString.toLowerCase();
    let vowels = "aeoiu"
    let count = 0;
    for (i = 0; i < vowels.length; i++) {
        for (j = 0; j < lowerString.length; j++) {
            if (vowels.charAt(i) == lowerString.charAt(j)) {
                count++;
            }
        }
    }

    return count;
}

console.log(countVowels("Hello World"));