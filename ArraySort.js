// Acending sort
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)
// decinding
    // 1 first sort the array
    // 2 then apply reverse method
fruits.reverse()
console.log(fruits)

// Sort basically work on string bases it will not properly work on integer
//  if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Acending
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)
console.log('Minimum value ' + points[0])

// decending sort
points.sort(function(a, b){return b - a});
console.log(points)
console.log( 'Maximum value '+ points[0])
