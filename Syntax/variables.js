// let variable = 2;
// let another = "another"
// let isAnother = true ;
let createCounter = function (num){
    let count = num;
    return function(){
        return count++
    }
}

let counter = createCounter(5)

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())