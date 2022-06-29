                        /* String length */

// let text = "Muhammad Waris Zargar";
// console.log('String length ' + text.length)

// Escape Character
// \'	'	Single quote
// \"	"	Double quote
// \\	\	Backslash

// console.log('Single quote is \' here ')
// console.log('Double quote is \" here ')
// console.log('Baclslash is \\  here ')

                    /* Extracing string */

// Strings methods
// 1. Extracting String Parts

// 1.1 slice(start, end)
// it accept +ve and -ve indexs
// if -ve then string slice from right side
// if we not use second value then remaining string will print

let str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13)) // Returns Banan

// 1.2 substring(start, end) // similar as slice
// cannot accept -ve indexs

console.log(str.substring(7, 13)) // Returns Banana

// 1.3 substr(startIndex, length) // same as slice
// but second parameter define the number of extracted part
console.log(str.substr(7, 6))    // Returns Banana


                        /* String replace */

// String replace
// case senstive
// replace only 1 matching string
// 1.1 case sensitive
console.log(str.replace('Apple','Mango'))
// 1.2 case insenstive
console.log(str.replace(/apple/i, 'Lemon'))
// 1.3 replace globally string
console.log(str.replace(/Apple/g,'Sweat'))


                        /* String concat and trim charAt */
console.log(str.concat(', Mango ')) // Cpmbine two strings
console.log(str.trim('')) // replace spaces before and after string



console.log('charAt ' + str.charAt([0]))
console.log('charCodeAt ' + str.charCodeAt([0]))

// accessing string value
console.log('string at 0 ' + str[0])

// convert string to array split(',') on specific keys
console.log(str.split(' '))