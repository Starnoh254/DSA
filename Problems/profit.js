/**In the following code ,
 * . we try to find the best profit given an array of integers
 * . The buying price is determined by the arr[i] value
 * . The selling price must be the value of the arr at position
 *   y > i
 * . The code tries to find the maximum profit
 */
// function bestProfit(arr) {
//   let buyingPrice;
//   let sellingPrice;
//   let profit = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         continue;
//       }
//       buyingPrice = arr[i];
//       sellingPrice = arr[j];

//       if (sellingPrice - buyingPrice > profit) {
//         profit = sellingPrice - buyingPrice;
//       }
//     }
//   }

//   return profit;
// }

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
}
