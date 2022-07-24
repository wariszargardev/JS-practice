// Array.forEach()
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    // console.log("Value " + value + " index " + index , " Array " , array)
}

// Array.map
// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
    return value * 2;
}
console.log(numbers2)

// Array.filter
// The filter() method creates a new array with array elements that passes a test.

const numbers3 = [45, 4, 9, 16, 25];
const over18 = numbers3.filter(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(over18)

// Array.reduce()
// Not effect on existing array and return single value method start left-to right
// Note that the function takes 4 arguments:
// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself

const numbers4 = [45, 4, 9, 16, 25];
let sum = numbers4.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}

console.log("Sum of number "  + sum)

// Array.reduceRight()
// Same as reduce but reduce from right  to left


// Array.every()
// check if all array element fulfill the condition this will return true if all element pass the condition otherwise false retrun

const numbers5 = [45, 4, 9, 16, 25];
let allOver18 = numbers5.every(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(allOver18) // false

// Array.some()
// Check if any of array element pass the condition return true or false

const numbers7 = [45, 4, 9, 16, 25];
let someOver18 = numbers7.some(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(someOver18)

// Array.indexOf() return first match

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log(position)

// last indexof
// check last in array

let position1 = fruits.lastIndexOf("Apple") + 1;
console.log(position1)

// Array.includes()
// check if array has specific value

fruits.includes("Mango"); // is true

console.log(fruits.includes("Mango"))

// Array.find()
// The find() method returns the value of the first array element that passes a test function.
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(first)

// Array.from()
// String to array conversion
$newArray = Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]

console.log($newArray)

// Array.Keys()
// The Array.keys() method returns an Array Iterator object with the keys of an array.
const keys = fruits.keys();
let text = '' ;
for (let x of keys) {
    text += x + "<br>";
}
console.log(text)