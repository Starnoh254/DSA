function majorityElement(nums) {
  let result = {};
  for (let i = 0; i < nums.length; i++) {
    if (!result[nums[i]]) {
      result[nums[i]] = 1;
    } else {
      result[nums[i]]++;
    }
  }
  return Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b));
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
