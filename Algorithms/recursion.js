// // fibonacci series
// function fibonacci(n) {
//   if (n <= 1) {
//     return [0, 1].slice(0, n + 1);
//   } else {
//     let sequence = fibonacci(n - 1);
//     sequence.push(
//       sequence[sequence.length - 1] + sequence[sequence.length - 2]
//     );
//     return sequence;
//   }
// }

// function getTerm(arr, n) {
//   return arr[n];
// }
// console.log(getTerm(fibonacci(7), 7));

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  }
}

console.log(recursiveFibonacci(3000))
