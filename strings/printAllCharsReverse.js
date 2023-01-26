// Task 2: Print out all characters of a string in reversed order

let sentence = "Hello World";
let len = sentence.length;

for(let i = len; i > 0; i--) {
    console.log(sentence.charAt(i-1));
}