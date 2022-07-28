// Everything With a "Value" is True

console.log(Boolean(100))
console.log(Boolean(-15))
console.log(Boolean("Hello"))
console.log(Boolean("false"))

// Everything Without a "Value" is False
let x; // undefine retrun false
x=-0; //  retrun false
x= 10 / 0; // NaN   retrun false
console.log(Boolean(0))
console.log(Boolean(""))