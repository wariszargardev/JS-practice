// ISO Date	"2015-03-25" (The International Standard)  (YYYY-MM-DD)
// Short Date	"03/25/2015"
// Long Date	"Mar 25 2015" or "25 Mar 2015"

// Date and time is separated with a capital T.
// UTC time is defined with a capital letter Z.
// If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead

const d = new Date("2015-03-25T12:00:00-06:30");

// JavaScript Short Dates.
const d1 = new Date("03/25/2015");
// In some browsers, months or days with no leading zeroes may produce an error:

// JavaScript Long Dates.

// Long dates are most often written with a "MMM DD YYYY" syntax like this:
const d2 = new Date("Mar 25 2015");
// month day and year in any order
const d3 = new Date("25 Mar 2015");
// And, month can be written in full (January), or abbreviated (Jan):
const d4 = new Date("January 25 2015");


// Date Input - Parsing Dates
// Date.parse() returns the number of milliseconds between the date and January 1, 1970:
// You can then use the number of milliseconds to convert it to a date object:
let msec = Date.parse("March 21, 2012"); //  convert it to mili second
const d5 = new Date(msec); // convert back to date

console.log("milisecond " + msec )
console.log("milisecond to date  " + d5 )

