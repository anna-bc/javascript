// 1. create a program that prints out the first 10 numbers

for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}
console.log ("Task 1 done! \n \n")

// 2. create a program that uses a while loop to print numbers between 1 and 10 in reverse order
let a = 10;
while(a > 0) {
    console.log(a);
    a--;
}

console.log ("Task 2 done! \n \n")

// 3. Create a program that uses a for loop to print out the first 10 even numbers.

for(let i = 0; i < 20; i++) {
    if ((i % 2) == 0) {
        console.log(i);
    }
}
console.log ("Task 3 done! \n \n")

// 4. Write a program that uses a while loop to calculate the sum of numbers from 1 to 100.
let c = 1;
let result = 0;
while(c <= 100) {
    result = result + c;
    c++;
}
console.log(result);
console.log ("Task 4 done! \n \n");

// 5. Create a program that uses a for loop to print out the first 10 odd numbers.
for(let i = 0; i < 20; i++) {
    if ((i % 2) != 0) {
        console.log(i);
    }
}
console.log ("Task 5 done! \n \n")

// 6. Create a program that uses a for loop to print out the first 10 numbers in the Fibonacci sequence

let f2 = 0;
let f1 = 1;

for(let i = 0; i < 10; i++) {
    if( i > 1 ) {
        let f3 = f1 + f2;
        console.log(f3);
        f2 = f1;
        f1 = f3;
    }
    else if(i == 0) {
        console.log(f2);
    }
    else {
        console.log(f1);
    }
}
console.log ("Task 6 done! \n \n")

// 7. Write a program that uses a while loop to print out the first 10 prime numbers.

let prime = 0;
let incr = 1;
while(prime < 10) {
    let primeFound = false;
    for(let j = 2; j < incr; j++ ) {
        if ((incr % j) == 0) {
            primeFound = true;
            break;
        }
    }
    if(primeFound == false) {
        console.log(incr);
        prime++;
    }
    incr++;
}

console.log ("Task 7 done! \n \n")



// 8. Write a program that uses a while loop to calculate the factorial of a given number.
let n = 5;
let inc = 1;
let fact = 1;
while(inc <= n) {
    fact = fact * inc;
    console.log(fact);
    inc++;
}

console.log ("Task 8 done! \n \n")