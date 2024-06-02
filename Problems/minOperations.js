/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function (nums) {
  let tracker = {};
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!tracker[nums[i]]) {
      tracker[nums[i]] = 1;
    } else {
      tracker[nums[i]] += 1;
    }
  }

  for (key in tracker) {
    let times = tracker[key];
    if (!(times % 2 === 0) && !(times % 3 === 0)) {
      return -1;
    }
    while (times) {
      if (times % 3 === 0) {
        result += times / 3;
        times = 0;
      } else {
        times -= 2;
        result += 1;
      }
    }
  }

  return result;
};

let nums = [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19];
console.log(minOperations(nums))
