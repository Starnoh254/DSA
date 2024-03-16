function factorial(n) {
  let result = 1; // Initialize result to 1
  for (let i = 2; i <= n; i++) {
    // Start from 2 instead of 1
    result *= i;
  }
  return result;
}

console.log(factorial(6)); // Output: 1 (factorial of 0 is 1)


