// 4. Create a program that calculates the sum of the squares of the first n natural numbers.

let n = 3;
let sum = 0;
for(let i = 1; i <= n; i++) {
    sum = sum + Math.pow(i, 2);
}
console.log(sum);