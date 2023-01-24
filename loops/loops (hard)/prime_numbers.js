// 1. Create a program that generates the first n prime numbers. A prime number is a number that is divisible by only 1 and itself.
let i = 2;
let primes = 0;
let n = 5;
while(primes < n) {
    let notPrime = false;
    for(let j = 2; j < i; j++) {
        if((i % j) == 0) {
            notPrime = true;
            break;
        }
    }
    if(!notPrime) {
        console.log(i);
        primes++;
    }
    i++;
}