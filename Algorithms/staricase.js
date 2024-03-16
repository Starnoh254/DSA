// recursion

// function stairCase(n) {
//   if (n <= 2) {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//   } else return stairCase(n - 1) + stairCase(n - 2);
// }

console.log(stairCase(5))

function stairCase(n) {
  let noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}
