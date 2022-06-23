// The let keyword was introduced in ES6 (2015).
// Variables defined with let cannot be Redeclared.
// Variables defined with let must be Declared before use.
// Variables defined with let have Block Scope.

/*
let x = "John Doe";
let x = 0;
// SyntaxError: 'x' has already been declared

 */

let x = 10;
// Here x is 10

{
    let x = 2;
// Here x is 2
}

// Here x is 10

/*
var x = 2;    // Allowed
let x = 3;    // Not allowed

{
    let x = 2;    // Allowed
    let x = 3     // Not allowed
}

{
    let x = 2;    // Allowed
    var x = 3     // Not allowed
}

*/

