// Task 6: Write a program that finds the longest substring without repeating characters in a given string.

let sentence = "Hello World";
let lowerString = sentence.toLowerCase();
let substring = "";
let maxSubstring = "";

for (let i = 0; i < lowerString.length; i++) {
    if (substring.includes(lowerString.charAt(i))) {
        if (substring.length >= maxSubstring.length) {
            maxSubstring = substring;
            }
        substring = lowerString.charAt(i);
    }

    substring += lowerString.charAt(i);
    
}
if (substring.length >= maxSubstring.length) {
    maxSubstring = substring;
}
console.log ("The longest substring with length " + maxSubstring.length + " is " + maxSubstring);
