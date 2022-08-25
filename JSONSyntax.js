// JSON syntax is derived from JavaScript object notation syntax:

// Data is in key/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

// "key":"value"
let test= {name:"John"};
console.log(test.name);

let person = {name:"John", age:31, city:"New York"};
console.log(person.age) // access object data
console.log(person['city']) // access object data

// changing value
person.age = 25
console.log(person)

// Why JSON is Better Than XML

// XML is much more difficult to parse than JSON.
// JSON is parsed into a ready-to-use JavaScript object
