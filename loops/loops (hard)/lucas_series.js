// 3. Create a program that calculates the nth number in the Lucas series. The Lucas series is similar to the Fibonacci series but starts with 2 and 1.
let l2 = 2;
let l1 = 1;
let n = 5;
let i = 2;
let lucas = 0;

while(i <= 5) {
    lucas = l1 + l2;
    l2 = l1;
    l1 = lucas;
    i++;
}
console.log(lucas);

// Not done yet!