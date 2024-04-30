/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

const flat = function (arr, n) {
  let depth = 0;
  let res = []
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if (arr[i] instanceof Array && depth < n) {
        console.log("An array")
      
      res.push(...flat(arr[i] , n - 1))
      
    }
    else{
        console.log("Not an array")
        res.push(arr[i])
    }
  }

  return res;
};

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 1;

console.log(flat(arr , n))
