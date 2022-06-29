// indexOf && lastIndexOf && search
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate")    // Returns 7
str.lastIndexOf("locate")    // Returns 21

// both functions return -1 if not found
// both function accept second parameter position where string matching starts

str.search("locate")     // Returns 7

// search & indexOf are different because search method not accept second argument



// string match and return first match part  and is case senstive text.match('ain')
// can accept global g to find all and return array
// it can also make g and in case senstitive text.match(/ain/gi)
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g)    // Returns an array [ain,ain,ain]


// includes return true if string contains specific value & it is case senstive
 text = "Hello world, welcome to the universe.";
text.includes("world")    // Returns true

// it can accept second position parameter
text.includes('world',6) // true
text.includes('world',9) // false


// start with check if string start with specific value
 text = "Hello world, welcome to the universe.";

text.startsWith("Hello")    // Returns true
text.startsWith("world")    // Returns false
// it can accept 2 position parameter
text.startsWith('world',6) // true
text.startsWith('world',5) // false

// Ends with
text.endsWith('universe.') // true


// Back ticks & interpolation
let name = 'waris'
let strcustom = `My name is ${name}`; // `` back ticks & ${} interpolation

console.log(strcustom)

