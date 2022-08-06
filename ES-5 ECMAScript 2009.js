// ES5 Features
// "use strict"
// String[number] access
// Multiline strings
// String.trim()
// Array.isArray()
// Array.forEach()
// Array.map()
// Array.filter()
// Array.reduce()
// Array.reduceRight()
// Array.every()
// Array.some()
// Array.indexOf()
// Array.lastIndexOf()
// JSON.parse()
// JSON.stringify()
// Date.now()
// Date.toISOString()
// Date.toJSON()
// Property getters and setters
// Reserved words as property names
// Object methods
// Object defineProperty()
// Function.bind()
// Trailing commas



// Property Access on Strings
let name= "Waris";
console.log(name.charAt(0)) // return W
// But bow you can access
console.log(name[0]) // same result will return

// Strings Over Multiple Lines
let full_name = "Waris" +
    "zargar";
console.log(full_name) // wariszargar

// Reserved Words as Property Names
let student = {name: 'Waris' , new: 35}
console.log(student.new) // 35

// String.trim() remove extra space before & after string
let nameString = '          waris         ';
console.log(nameString.trim()) // waris

// Array.isArray() check if variable is array or not
let array = ['w','wa','war','wari','waris']
console.log(Array.isArray(array)) // true
console.log(Array.isArray(name)) // false

// Array.forEach() iteration
// 1 way
array.forEach((value,index)=>{
    console.log("Index " + index + " value " + value )
})
// 2 way
array.forEach(iterateLoop)

function iterateLoop(value, index){
    console.log("Value " + value +  " at index " + index)
}

// Array.map() this will return new array
let arrayOutput = array.map((value, index, array)=>{
    return  "Value " + value +  " at index " + index
})

console.log(arrayOutput)

// Array.filter() // return only value that fulfill condition
let arrayFilterOutput = array.filter((value, index, array)=>{
    return value.includes('war') // return from war,wari,waris
})

console.log(arrayFilterOutput)

// Array.reduce() && Array.reduceRight convert single value
var numbers = [45, 4, 9, 16, 25];
var reduceNumberOutput = numbers.reduce(reduceNumber);

function reduceNumber(total, value, index, array) {
    return total + value;
}
console.log(reduceNumberOutput)

// Array.every() return true/false if all element fulfill condition return true otherwise false
console.log(numbers.every(everyFunctionFilter));
function everyFunctionFilter(value){
    return value > 18;
}

// Array.some() return true/false if some element fulfill the condition return true otherwise false
console.log(numbers.some(someFunctionFilter))
function someFunctionFilter(value){
    return value > 18;
}

// Array.indexOf return index of matching element
let fruits = ["Banana", "Apple" ,"Orange", "Apple", "Mango"];
console.log(fruits.indexOf('Apple')) // 1
console.log(fruits.lastIndexOf('Apple')) // 3

// JSON.parse(string)
// this will convert string to readable object

let response = '{"name":"John", "age":30, "city":"New York"}';
response = JSON.parse(response); // convert to object
console.log(response.name)

// JSON.stringify(object) convert to string
console.log(JSON.stringify(response))


// Date.now()
console.log(Date.now()) // return milliseconds of current date

// Date.toISOString()
let date = new Date();
console.log(date.toISOString())

// Date.toJSON()
console.log(date.toJSON())


// Property Getters and Setters

let studentObject = {
    fname: "Waris",
    lname: "Zargar",
    email: 'waris@gmail.com',
    get fullName(){
        return this.fname + " " + this.lname
    },
    set setFName(value){
        this.fname = value
    }
}

console.log(studentObject.fullName)
studentObject.setFName = "Ali"
console.log(studentObject.fullName)