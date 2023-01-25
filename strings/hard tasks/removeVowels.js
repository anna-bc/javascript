// Task 3: Write a program that removes all vowels from a given string.
let sentence = "Hello World";
let vowels = "aAeEiIoOuU";

for (let i = 0; i < vowels.length; i ++) {
    sentence = sentence.replaceAll(vowels.charAt(i), "");
}

console.log(sentence);