// interface User {
//     name : string;
//     age : number;
//     email ?: string; // Optional property
//     readonly id : number; // Read-only property 
var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog.prototype.speak = function () {
        console.log("Woof ! My name is " + this.name);
    };
    return Dog;
}());
var myDog = new Dog("Buddy", 12);
myDog.speak();
