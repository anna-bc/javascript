// Task 8: Write a program, that inserts a character into a string at a given position
let sentence = "Hello World";
let len = sentence.length;
let position = 6;
let newChar = "p";
let newSentence = "";

if (position > len) {
    console.log("Position exceeds string length")
}

for(let i = 0; i <= len; i++) {
    if (i == position) {
        newSentence += newChar + sentence.charAt(i);
    } else {
        newSentence += sentence.charAt(i);
    }
}
console.log(newSentence);