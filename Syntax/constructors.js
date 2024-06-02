var Example = /** @class */ (function () {
    // class properties are initialized and declared in the constructor 
    function Example(message, count) {
        this.message = message;
        this.count = count;
        this.anotherMessage = "Hey ! I am another class property";
    }
    // method to get the private message 
    Example.prototype.getMessage = function () {
        return this.message;
    };
    return Example;
}());
var example = new Example("Hello there , I am learning Typescript ", 50);
console.log(example.count);
console.log(example.getMessage());
console.log(example.anotherMessage);
