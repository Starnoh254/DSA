var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mammal = /** @class */ (function () {
    function Mammal() {
        this.classification = "Mammal";
    }
    Mammal.prototype.makeSound = function () {
        console.log("I am a mammal");
    };
    return Mammal;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(name, age) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Human.prototype.getName = function () {
        console.log(this.name);
    };
    Human.prototype.getAge = function () {
        console.log(this.age);
    };
    Human.prototype.makeSound = function () {
        console.log("I am a human");
    };
    return Human;
}(Mammal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Dog.prototype.getName = function () {
        console.log(this.name);
    };
    Dog.prototype.getAge = function () {
        console.log(this.age);
    };
    Dog.prototype.makeSound = function () {
        console.log("Woof Woof");
    };
    return Dog;
}(Mammal));
var person = new Human("Starnoh", 20);
var dog = new Dog("Spikey", 3);
person.makeSound();
dog.makeSound();
person.getName();
person.getAge();
dog.getName();
dog.getAge();
