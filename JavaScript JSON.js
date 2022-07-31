let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';


console.log(typeof text) // text

let obj = JSON.parse(text)
for (let employee of obj.employees) {
    console.log(employee.firstName)
}
