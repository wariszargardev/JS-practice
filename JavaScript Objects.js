// You can define in single line as well as multiple line
let car = {
    name: 'Mehran' ,
    color: 'Red' ,
    price: 100000,
}

// console.log('Car name '+ car.name)
// console.log('Car color '+ car['color'])
// console.log('type of car is ' + typeof car )


let student = {
    fname : 'Muhammad',
    lname : 'Waris',
    age : 25,
    fullname: function (){
        return this.fname + ' ' + this.lname
    }
}

console.log(student.fullname())

// adding new values to object
student.cgpa = 3.13;
console.log(student)