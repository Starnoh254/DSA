/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let resultArray = [];
  let checker = {};

  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] in checker)) {
      checker[nums[i]] = 1;
      resultArray.push(nums[i]);
    }
  }
  nums = resultArray;
  return nums.length;
};

console.log(removeDuplicates([1,1,2]))
