let text = "";
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

console.log(text)

// The For In Loop
// The JavaScript for in statement loops through the properties of an Object:
const person = {fname:"John", lname:"Doe", age:25};

for (let key in person) {
    console.log("Key is "+ key)
    console.log("value is "+ person[key])
}


// Example Explained
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]


// for in also work on array and return index of array


const numbers = [45, 4, 9, 16, 25];

let txt1 = "";
for (let x in numbers) {
    txt1 += numbers[x];
}

// Array.forEach()
// The forEach() method calls a function (a callback function) once for each array element.

const numbers1 = [45, 4, 9, 16, 25];

let txt2 = 0;
numbers1.forEach(myFunction);

function myFunction(value, index, array) {
    txt2 += value;
}

console.log(txt2)

const stringName = "wariszargar";
for (const stringNameKey in stringName) {
    console.log(stringName[stringNameKey])
}

// The For Of Loop
// The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

const cars = ["BMW", "Volvo", "Mini"];

let output = "";
for (let x of cars) {
    output += x;
}
console.clear()
console.log(output)