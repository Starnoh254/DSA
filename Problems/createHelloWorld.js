const createHelloWorld = function(){
    return function(...args){
        return "Hello world " + args
    }
}

let helloWorld = createHelloWorld()
console.log(helloWorld("John" , "Mary " , "Elizabeth",2)) // Hello world
