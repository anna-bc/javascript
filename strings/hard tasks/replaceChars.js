// Task 2: Write a program that replaces all occurrences of a given character with another character in a given string.

let sentence = "Hello World";
let replacedChar = "l";
let char = "a";
let newSentence = "";

for (i in sentence) {
    if (sentence.charAt(i) == replacedChar) {
        newSentence += char;
    } else {
        newSentence += sentence.charAt(i);
    }
}

console.log(newSentence);