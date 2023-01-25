// Task 5: Write a program that finds the first non-repeated character in a given string.
let sentence = "aabbc corld";
let repeats = "";
let lowerString = sentence.toLowerCase().replaceAll(" ", "");

for (let i = 0; i < lowerString.length; i ++) {
    let nextChar = lowerString.charAt(i + 1);
    if (!(lowerString.charAt(i) == nextChar)) {
        console.log("The Char " + lowerString.charAt(i) + " is the first not-repeated char in the string '" + sentence + "'");
        return;
    }
    i++;
}
console.log("No non-repeatable Chars");
