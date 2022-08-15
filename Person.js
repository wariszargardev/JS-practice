class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    setName = (name) =>{
        this.name = name;
    }

    setAge = (age) =>{
        this.age = age;
    }

    getName = (name) =>{
        return this.name;
    }

    getAge = (name) =>{
        return this.age
    }
}

let p = new Person('Ali' , 35);
console.log(p.getAge())
p.setAge(25)
console.log(p.getAge())