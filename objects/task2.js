// Task 2: Write a function that takes in an object and a key, and renames that key in the object.
function renameKey(obj, key) {
    obj["renamed"] = obj[key];
    delete obj[key];
    return obj;
}

let user = {
    name: "Sarah",
    surname: "Mille",
    height: 160
}

console.log(renameKey(user, "name"));