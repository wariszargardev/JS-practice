// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
// Sometimes you would like to have better control over when to execute a function.
// Suppose you want to do a calculation, and then display the result.
// You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:

// JavaScript Callbacks
function displayResult(result){
    console.log(result)
}

function add(n1,n2,callBack){
    let result = n1 + n2;
    callBack(result)
}

add(3,5,displayResult)