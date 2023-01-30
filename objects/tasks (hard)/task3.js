// Task3 : Write a function that takes in an object and a key, and returns the value of that key. If the key does not exist, the function should return the value of the nearest key in alphabetical order.

function returnValue(obj, key) {
    if (obj[key]){
        return obj[key];
    }
}