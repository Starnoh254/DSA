class Example {

    // class properties are initialized and declared in the constructor 
    constructor(private message : string , public count : number){}

    anotherMessage = "Hey ! I am another class property"
    // method to get the private message 
    getMessage(){
        return this.message;
    }
}

const example = new Example("Hello there , I am learning Typescript " , 50)
console.log(example.count)
console.log(example.getMessage())
console.log(example.anotherMessage)
