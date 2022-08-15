const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    fullName(){
        return this.firstName + " "  + this.lastName
    },
    fullNameUpperCase: function (){
        return (this.firstName + " " + this.lastName).toUpperCase()
    }
};
// console.log(person)
// console.log(person.firstName)
// console.log(person['firstName'])
// console.log(person.fullName())

let user1 = person
// console.log(user1.lastName)

// JavaScript for...in Loop
// for (const user1Key in user1) {
//     console.log("Key " + user1Key + "  value " + user1[user1Key])
// }

// Adding New Properties
person.nationality = "English";
// console.log(person)

// Deleting Properties
delete user1.age
// console.log(user1)

// Nested Objects
let user = {
    name : "Waris",
    age: 25,
    study:{
        degree: "BS",
        "CGPA": 3.13
    }
}

// console.log(user)
// console.log(user.study)
// console.log(user.study.degree)


const myObj = {
    name: "John",
    age: 30,
    cars: [
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]}
    ]
}

// for (const myObjElement of myObj.cars) {
//     console.log(myObjElement.name)
// }


// console.log(person.fullNameUpperCase())

// Using Object.values()
// Any JavaScript object can be converted to an array using Object.values():

let personArray = Object.values(person)
// console.log(personArray)

// Using JSON.stringify()
let myString = JSON.stringify(person);
// console.log(myString)


// JavaScript Object Getter & Accessors
let newObj= {
    fname: "waris",
    lname: "zargar",
    set fitst_name(value){
        this.fname = value
    },

    get full_name(){
        return this.fname + " " + this.lname
    }
}

// console.log(newObj.full_name)

// JavaScript Object Constructors

function Person(name,age){
    this.name = name;
    this.age = age;

    this.uname = function(){
        return this.name
    }
}

let person1 = new Person("Ali", 25)
person1.language = "ENG";
// console.log(person1)
// console.log(person1.uname())

// JavaScript Object Prototypes
// This will add new properties to onject

function Student(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Student.prototype.nationality = "English";
const studentWaris = new Student("John", "Doe", 50, "blue");
// console.log(studentWaris)