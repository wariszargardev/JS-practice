// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.

// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists in the Set
// forEach()	Invokes a callback for each element in the Set
// values()	Returns an iterator with all the values in a Set
// Property	Description
// size	Returns the number of elements in a Set


const letters = new Set(["a","b","c"]);
letters.add("a"); // it will not add because a already exist
console.log(letters.size) // 3
console.log(letters)
console.log(typeof letters) // object
console.log(letters.values() ) // object

console.log(letters.has("a"))
letters.delete("b")
console.log(letters)

