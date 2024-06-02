// I am trying to understand the Map method
// I am going to use the map method to generate the square of  numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squared_numbers = numbers.map((number) => number * number);
let doubled_numbers = numbers.map((number) => number * 2);
let root_numbers = squared_numbers.map((number) => Math.sqrt(number));

console.log(squared_numbers);
console.log(doubled_numbers);
console.log(root_numbers);


// fill method 

let array = [1,2,3,4,5]
console.log(array.fill(0 , 2 ))
// console.log(array)