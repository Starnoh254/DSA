// interface User {
//     name : string;
//     age : number;
//     email ?: string; // Optional property
//     readonly id : number; // Read-only property 

// }

// const user : User = {
//     name : 'Starnoh John',
//     age : 20 , 
//     id : 1
// }

// console.log(user.name)

interface Animal {
    name : string;
    age : number;
    speak(): void ; 
}

class Dog implements Animal{
    name : string;
    age : number;
    constructor(name : string , age : number ){
        this.name = name;
        this.age = age;
    }
    speak(): void {
        console.log("Woof ! My name is " + this.name);
    }
}

const myDog = new Dog("Buddy" , 12);
myDog.speak()