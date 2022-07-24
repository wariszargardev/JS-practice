// 1. Convert array to string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits.toString()) // Array converted to string this will return string

// 2. Join method return string and also we replace with
console.log(typeof fruits.join(" * ")) // if we check type it return string

// 3. Push
    // 3.1 function add element at the end of array
    // 3.2 in other word we can add element at last index
fruits.push("Lemon")
console.log(fruits)

// 4. Pop
    // 4.1 pop method remove last element
    // 4.2 in other word pop method remove from last index element
fruits.pop()
console.log(fruits)

// 5 shift
    // 5.1 shift method will remove element from first position
fruits.shift()
console.log(fruits)

// 6 unshift
    // 6.1 unshift method will add element at first element
fruits.unshift("Banana")
console.log(fruits)

// 7 splice(newElementIndex,noOfElementRemovesFromNewElementIndex,restOfElementShouldBeAddedToArray)
    // 7.1 newElementIndex Define new element position
    // 7.2 noOfElementRemovesFromNewElementIndex no of element should be remove from index define in first parameter
    // 7.3 restOfElementShouldBeAddedToArray rest of all element should added into array

// add two new elements after Apple
let fruits_array = ["Banana", "Orange", "Apple", "Mango"];

fruits_array.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits_array)

// Using splice() to Remove Elements
// This will remove Banana & Orange fom array
fruits_array.splice(0, 2)
console.log(fruits_array)


// 8 concat
    // 8.1 Create new array by merging two or more arrays & also add element to array
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren)

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const finalArray = arr1.concat(arr2, arr3);
console.clear()
console.log(finalArray)

// Merging array with value
const arr11 = ["Emil", "Tobias", "Linus"];
const finalArray2 = arr11.concat("Peter");
console.clear()
console.log(finalArray2)


// 9 slice
    // 9.1 slice method create new array with specific array pieces
    // it will not effect on existing array
    // first argument define from where we can start
    // second element define end of array spliting
    // if not define 2nd argument rest of array will be splitted to new array

const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruit.slice(3); // It will return Apple, Mango because we cannot define second argument
console.log(citrus)

const citrus1 = fruit.slice(1, 3);
console.log(citrus1) // It will return orange & apple