// search method will search the specific string and return match index otherwise -1 return
// it will stop after first match
// this method by default case sensitive
let text = "Visit W3Schools W3Schools!";
let n = text.search("W3Schools");

console.log(n)

console.log(text.search(/w3scho/i)); // i stand for case in sensitive
console.log(text.replace(/w3scho/gi,'www')); // i stand for case in sensitive & g for globally meaning replace from compleet string

// Regular Expression Patterns
// [abc]	Find any of the characters between the brackets
 text = "Is this all there is?";
let result = text.match(/[h]/g);
console.log(result)
// [0-9 ]Find any of the digits between the brackets
let text1 = "123456789";
let result1 = text1.match(/[1-4]/g);
// (x|y)	Find any of the alternatives separated with |


// The test() method is a RegExp expression method.
// It searches a string for a pattern, and returns true or false, depending on the result.
// The following example searches a string for the character "e":

const pattern = /e/;
let isMatch = pattern.test("The best things in life are free!");
console.log(isMatch)