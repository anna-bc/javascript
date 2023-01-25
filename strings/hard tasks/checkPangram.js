// Task 4: Write a program that checks if a given string is a pangram (a sentence that contains every letter of the alphabet at least once).

let sentence = "Hello World";
let sentence2 = "A quick brown fox jumps over the lazy dog";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
sentence = sentence.toLowerCase();
for (let i = 0; i < alphabet.length; i++) {
    if (sentence.includes(alphabet.charAt(i))) {
        continue;
    }
    else {
        console.log("The sentence '" + sentence + "' is not a pangram");
        return;
    }
}

console.log("The sentence '" + sentence + "' is a pangram");