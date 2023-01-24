// 2. Create a program that finds the greatest common divisor (GCD) of two numbers using the 
// Euclidean algorithm. The GCD is the largest number that divides both numbers without a 
// remainder. 
let a = 270;
let b = 192;
let r;
while((a != 0) && (b != 0)) {
    r = a % b;
    a = b;
    b = r;
    if(a == 0) {
        console.log(b);
    }
    else if(b == 0) {
        console.log(a);
    }

}