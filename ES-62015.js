// New Features in ES6
// The let keyword
// The const keyword
// Arrow Functions
// For/of
// Map Objects
// Set Objects
// Classes
// Promises
// Symbol
// Default Parameters
// Function Rest Parameter
// String.includes()
// String.startsWith()
// String.endsWith()
// Array.from()
// Array.keys()
// Array.find()
// Array.findIndex()
// New Math Methods
// New Number Properties
// New Number Methods
// New Global Methods
// Iterables Object.entries
// JavaScript Modules


let abc = "lklk";
const def = "okok";

arrowFunction = () =>{
    console.log("Arrow function call")
}

arrowFunction()
// The For/Of loop over string iterable object arrays
let customString = "Custom";

for (const customStringElement of customString) {
    console.log(customStringElement)
}

let arrayForOf = ['apple','mango','banana']
for (const string of arrayForOf) {
    console.log(string)
}

// for/in return key/index

for (const arrayForOfKey in arrayForOf) {
    console.log(arrayForOfKey)
}
let obj = {name:"Waris", age:35}
for (const objKey in obj) {
    console.log(objKey)
    console.log(obj[objKey])
}

// map Being able to use an Object as a key is an important Map feature.

// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a new Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

// set have unique value  but same like map

// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters)


// String.includes()
let simpleString = "a new world to holy shit";
console.log(simpleString.includes('new'))
console.log(simpleString.includes('holy'))

// String.startsWith()
console.log(simpleString.startsWith('a new')) // true
console.log(simpleString.startsWith('a new oko')) // false
console.log(simpleString.startsWith('world',6)) // true

// String.endsWith()
console.log(simpleString.endsWith('shit')) // true
console.log(simpleString.endsWith('a new oko')) // false

// Array.from()
// convert string to array
console.log(Array.from(simpleString))
