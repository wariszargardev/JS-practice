class StudentClass{
    age = 35;
    constructor() {
        console.log("Constructor call")
    }

    setName = (name) =>{
        this.name = name;
    }

    setEmail = (email) => {
        this.email = email;
    }

    getName = () => {
        return this.name;
    }

    getEmail = () => {
        return this.email;
    }

    getAge = () =>{
        return this.age
    }
}

let waris = new StudentClass();
waris.setName("Muhammad Waris")
waris.setEmail("wariszargardev@gmail.com")

console.log(waris.getName())
console.log(waris.getEmail())
console.log(waris.getAge())
console.log(waris.age)