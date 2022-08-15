// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.

// Method	Description
// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists
// clear()	Removes all elements from a Set
// forEach()	Invokes a callback for each element
// values()	Returns an Iterator with all the values in a Set
// keys()	Same as values()
// entries()	Returns an Iterator with the [value,value] pairs from a Set

let letters = new Set(['a','b','c']); // create a new set
letters.add("d"); // add element to set

console.log(letters)

// Iterate over loop
letters.forEach(function (value){
    // console.log(value)
})

for (const letter of letters) {
    // console.log(letter)
}

console.log(letters.keys())

if(letters.has('a')){
    // console.log("Exists")
}
else {
    // console.log("Not exists")
}

letters.delete('a')

console.log(letters.size)

letters.clear()
// console.log(letters)

