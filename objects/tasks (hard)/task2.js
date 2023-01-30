// Task 2: Write a function that takes in an object, and returns a new object with all its key-value pairs sorted by the length of the keys.
function sortKey(obj) {
    let newObj = {};
    let keyArr = Object.keys(obj);
    let done = false;
    console.log(keyArr);
    while(!done) {
        done = true;
        for(i = 1; i < keyArr.length; i++) {
            console.log(keyArr);
            if (keyArr[i - 1].length > keyArr[i].length) {
                done = false;
                let tmpVal = keyArr[i - 1];
                keyArr[i - 1] = keyArr[i];
                keyArr[i] = tmpVal;
            }
        }
    }
    console.log(keyArr);

    for (key of keyArr) {
        newObj[key] = obj[key];
    }
    return newObj;
}

let user = {
    name: "Sarah",
    surname: "Miller",
    height: 160,
    age: 25,
    breathe: function() { 
        console.log(`${this.name} is breathing!`)
    }
}

console.log(sortKey(user));