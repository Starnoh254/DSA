class Mammal {
    classification : string;
    constructor(){
        this.classification = "Mammal";
    }

    makeSound(){
        console.log("I am a mammal");
    }
}


class Human extends Mammal{
    constructor(private name : string , private age : number){
        super();  
    }

    getName (){
        console.log(this.name)
    }

    getAge(){
        console.log(this.age)
    }

    makeSound(): void {
        console.log("I am a human");
    }
}


class Dog extends Mammal{
    constructor(private name : string , private age : number){
        super();
    }

    getName (){
        console.log(this.name)
    }

    getAge(){
        console.log(this.age)
    }

    makeSound(): void {
        console.log("Woof Woof")
    }
}


let person = new Human("Starnoh" , 20)
let dog = new Dog("Spikey" , 3)
person.makeSound();
dog.makeSound();
person.getName();
person.getAge();
dog.getName();
dog.getAge();
