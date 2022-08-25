// JSON stands for JavaScript Object Notation
// This example is a JSON string:

let studentString = '{"name":"John", "age":30, "car":null}';
console.log(typeof studentString); // string

let studentJSOnObject = JSON.parse(studentString)
console.log(typeof studentJSOnObject); // object
console.log("Name "  + studentJSOnObject.name) // Jhon

// JSON stands for JavaScript Object Notation
// JSON is a lightweight data-interchange format
// JSON is plain text written in JavaScript object notation
// JSON is used to send data between computers
// JSON is language independent *

// avaScript has a built in function for converting JSON strings into JavaScript objects:
// JSON.parse()

// JavaScript also has a built in function for converting an object into a JSON string:
// JSON.stringify()

