class Inheritance{
    constructor(brand) {
        this.brand = brand
    }

    getBrand(){
        return this.brand
    }
}

class Model extends Inheritance{
    constructor(brand, model) {
        super(brand);
        this.model = model
    }

    getModel(){
        return this.model
    }

    getInfo(){
        return "Brand " + this.getBrand() + " model " + this.getModel()
    }
}

let myCar = new Model("Mehran", 2022);

console.log(myCar.getInfo())