// 6. Create a program that takes in two numbers and checks whether the first number is divisible by the second number or not.
let a = 7;
let b = 2;
let isDivisible = false;
if ((a % b) == 0) {
    isDivisible = true;
    console.log("Number " + a + " is divisible by number " + b);
} else {
    console.log("Number " + a + " is not divisible by number " + b);
}