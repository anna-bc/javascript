// Task 4: Write a program, that detects palindromes

let sentence = "Anna";
let len = sentence.length;
let reversedSentence = "";

for(let i = len; i > 0; i--) {
    let char = sentence.charAt(i - 1);
    reversedSentence += char;
}


if (sentence.toLowerCase() == reversedSentence.toLowerCase()) {
    console.log("The sentence is a palindrome");
} else {
    console.log("The sentence is NOT a palindrome");
}