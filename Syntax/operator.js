// The nullish coalescing operator (??)
// what is the nullish coalescing operator ?
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side

// let name = null;
// let defaultName = "Guest";

// let displayName = name || defaultName;

// console.log(displayName)

let config = {
    timeout : 0 , 
    retries : undefined ,
}

let timeout = config.timeout || 3000;
let retries = config.retries || 5

console.log(timeout)
console.log(retries)
