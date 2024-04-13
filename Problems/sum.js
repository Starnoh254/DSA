// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     let searchElement = target - arr[i];
//     for (let n = i + 1; n < arr.length; n++) {
//       if (searchElement === arr[n]) {
//         return [i, n];
//       }
//     }
//   }
//   return '404 Not Found'
// }

console.log(twoSum([2, 7, 11, 15], 26));

function twoSum(arr, target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
  return '404 Not Found'

}
