const cars = [
    "Saab",
    "Volvo",
    "BMW"
];

console.log('Array',cars)
console.log('Accessing array element at position ',cars[0])
console.log("Length of array " + cars.length)
console.log('Last array element ' + cars[ cars.length -1 ])
console.log("Sorting ", cars.sort())
for (let i = 0 ; i < cars.length ; i++){
    console.log("Element at index " + i + cars[i])
}

cars.forEach(iterateLoop)

function iterateLoop(value){
    console.log("I am calling from function value is " + value)
}

cars.forEach(function (value, key){
    console.log(key + " " + value)
})

for (let car of cars) { // this will return value of array
    console.log(car)
}

for (const carsKey in cars) { // carsKey will return index
    console.log(carsKey)
}

// Adding element to array
cars.push("new element at array end")
console.log(cars)

cars[6] = "Lemon";  // Creates undefined "holes" in fruits

// Associative Arrays
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;

console.log(person)
console.log(person['age'])
console.log(typeof person) //object
console.log(Array.isArray(person) ? "True" : "false") // check if variable is array or not
console.log(person instanceof Array ? "True" : "false") // check if variable is array or not
