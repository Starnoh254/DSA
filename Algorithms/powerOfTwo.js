// function isPowerOfTwo(n) {
//   for (let i = 0; i < n; i++) {
//     if (n === Math.pow(2, i)) return true;
//   }
//   return false;
// }

// function isPowerOfTwo(n) {
//   if (n < 1) return false;
//   while (n > 1) {
//     if (n % 2 == 1) return false;
//     n = n / 2;
//   }
//   return true;
// }

function isPowerOfTwo(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(6));
