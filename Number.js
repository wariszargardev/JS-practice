// divide number with string return Nan
// divide with 0 or empty string return infinity
// Nan & infinity typeOf is number
// you can if it as not a number
let number = 10/'ll'
console.log(isNaN(number)) //  return true

let number1 = 10/'' // this will return inifinity
console.log(isNaN(number1)) //  return false

// if we add/sub/multiply/divide with NaN result is NaN
// Number can be objects
let otherNumber = 50;
let newNumber = new Number(50);
console.log(otherNumber == newNumber ? 'Match' : 'Not match') // Match because we use double not triple equal operator
console.log(otherNumber === newNumber ? 'Match' : 'Not match') // Not match because we use tripple equka opeartor it check type and valeue


// Number methods
// number.toString()
// Number(number)
// parseInt(number)
// parseFloat(number)
// number.toFixed(2) // it will add 2 character afetr decimals
// number.toPrecision(2) // it will add total chracter before and afetr decimal if character is greter then 2 then will all chracter shown and no character afetr decimal


let newN = 122;
console.log(typeof (newN.toString())) // string

let numberS = '8979';
console.log(typeof (numberS)) // string
console.log(typeof Number(numberS)) // number
console.log(typeof parseInt(numberS)) // number