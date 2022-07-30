// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

// new Map()	Creates a new Map
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// delete()	Removes a Map element specified by the key
// has()	Returns true if a key exists in a Map
// forEach()	Calls a function for each key/value pair in a Map
// entries()	Returns an iterator with the [key, value] pairs in a Map
// Property	Description
// size	Returns the number of elements in a Map

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);


// Set Map Values
fruits.set("apples", 100); // apple is key and  100 is its valeu
fruits.set("bananas", 100);
fruits.set("oranges", 100);

console.log(fruits)

console.log(fruits.get("apples"))