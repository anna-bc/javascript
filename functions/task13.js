// Task 13: Create a function that takes in a number and a function as an argument, then calls the provided function with the result of the number multiplied by 2.
 function doubleUp(cb, num) {
    let result = num * 2;
    return cb(result);
 }

 function cb(n) {
    return "The second function was called with the argument :" + n;
 }

 console.log(doubleUp(cb, 5));