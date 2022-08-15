// A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys.


// new Map()	Creates a new Map object
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// clear()	Removes all the elements from a Map
// delete()	Removes a Map element specified by a key
// has()	Returns true if a key exists in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// keys()	Returns an iterator object with the keys in a Map
// values()	Returns an iterator object of the values in a Map

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

fruits.set('stawbry',55)

console.log(fruits)

console.log(fruits.get('apples'))

// console.log(fruits.clear())

console.log(fruits.keys())