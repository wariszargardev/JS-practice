// json object
let object = {
    "employee":{"name":"John", "age":30, "city":"New York"}
}

console.log(object);
console.log(object.employee)
console.log(object.employee.age)    

// json arrays
let jsonArray = {
    "employees":["John", "Anna", "Peter"]
}
let employeeList = jsonArray.employees;
for (const iterator of employeeList) {
    console.log(iterator)
}


// A common use of JSON is to exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr)

// Stringify a JavaScript Object
const obj = {name: "John", age: 30, city: "New York"};
object = JSON.stringify(obj)
console.log( JSON.stringify(obj))

// array stringify
const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(arr);
console.log(myJSON)

