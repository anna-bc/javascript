// Task 7: Write a program, that concatinates a given string n times

let sentence = "Hello World";
let n = 3;
let concatenatedSentence = sentence;

for(let i = 1; i < n; i++) {
    concatenatedSentence += " " + sentence;
}

console.log(concatenatedSentence);