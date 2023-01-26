// Task 3: Write a program, that reverts a string.

let sentence = "Hello World";
let len = sentence.length;
let reversedSentence = "";

for(let i = len; i > 0; i--) {
    let char = sentence.charAt(i - 1);
    reversedSentence += char;
}

console.log(reversedSentence);