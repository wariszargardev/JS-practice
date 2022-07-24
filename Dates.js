// Creating Date Objects
// 1. new Date()
// 2. new Date(year, month, day, hours, minutes, seconds, milliseconds)
// 3. new Date(milliseconds)
// 4. new Date(date string)

// 1. By default, JavaScript will use the browser's time zone and display a date as a full text string
// when you are using browser not terminal
const d = new Date();
console.log(d)

// 2.1 if you give only year this will return 1970 with 1st month and 1st date when we written without quotes
// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
console.log(new Date(2018))
// 2.2 if you pass year and month it will automatic become first day of that month and h/m/s become 0
console.log(new Date(2018,11, 41)) // h/m/s become 0
// 2.3 if month start from 0 to 11 0 is Jan and 11 is Dec if we pass higher value then it will increase month years hours automatically
// Previous Century One and two digit years will be interpreted as 19xx:

// some useful methods
const dateTime = new Date();
console.log("to string " + dateTime.toString());
console.log("to DateString " + dateTime.toDateString());
console.log("to TimeString " + dateTime.toTimeString());
console.log("to UTCString " + dateTime.toUTCString());
