// Task 1: Write a program that checks if a given string contains any duplicate characters.

let sentence = "Hello World";

for (let i = 0; i < sentence.length - 1; i++) {
   for (let j = i + 1; j < sentence.length; j++)  {
        if (sentence.charAt(i) == sentence.charAt(j)) {
            hasDuplicates = true;
            console.log("This sentence has duplicates");
            return;
        }
   }
}

console.log("This sentence has NO duplicates");
