// function fibonacci(n) {
//   let numbers = [0, 1];
//   if (n <= 2) return numbers;
//   while (numbers.length < n) {
//     let nextNumber = numbers[numbers.length - 1] + numbers[numbers.length - 2];
//     numbers.push(nextNumber);
//   }
//   return numbers;
// }

console.log(fibonacci(7));

// another solution
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// Big - O  = O (n)
