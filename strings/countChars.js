// Task 5: Write a program, that counts how often each character is included in a string

let sentence = "Hello World";
let len = sentence.length;
let countingString = "";

for (let i = 0; i <= len; i++) {
	let count = 0;
    if (countingString.includes(sentence.charAt(i))) {
        continue;
    }
	for (let j = 0; j <= len; j++) {
  	    if (sentence.charAt(i) === sentence.charAt(j)) {
    	    count++
        }
    }
    countingString += sentence.charAt(i) + ": " + count + "; ";
    console.log("Character " + sentence.charAt(i) + " appears " + count + " times!");
}
console.log(countingString);