// The Math Object
// Unlike other objects, the Math object has no constructor.
// The Math object is static.
// All methods and properties can be used without creating a Math object first.

console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

// Number to Integer
// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)

console.log("Round " + Math.round(4.6)) // return 5
console.log("Round " + Math.round(4.5)) // return 5
console.log("Round " + Math.round(4.4)) // return 4


console.log("ceil " + Math.ceil(4.6)) // return 5
console.log("ceil " + Math.ceil(4.5)) // return 5
console.log("ceil " + Math.ceil(4.4)) // return 5

console.log("floor " + Math.floor(4.6)) // return 4
console.log("floor " + Math.floor(4.5)) // return 4
console.log("floor " + Math.floor(4.4)) // return 4

console.log("trunc " + Math.trunc(4.63)) // return 4
console.log("trunc " + Math.trunc(4.52)) // return 4
console.log("trunc " + Math.trunc(4.41)) // return 4


console.log("sign " + Math.sign(-4)) // return -1
console.log("sign " + Math.sign(0)) // return 0
console.log("sign " + Math.sign(4)) // return 1

console.log("pow " + Math.pow(8, 2)) // 8*8 = 64
console.log("sqrt " + Math.sqrt(64)) // 8
console.log("abs " + Math.abs(-4.7)) // return 4.7 no negative sign

console.log("min " + Math.min(0, 150, 30, 20, -8, -200))
console.log("max " + Math.max(0, 150, 30, 20, -8, -200))
console.log("random " + Math.random())

// abs() sin() cos() tan() log() acos() atanh() ...... Math.fun(value)


// Random number


// Returns a random integer from 0 to 9:
var randomNumber  = Math.floor(Math.random() * 10);
console.log(randomNumber)

// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);