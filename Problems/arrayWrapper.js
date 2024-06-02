/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
    this.nums = nums;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    
  this.sum = sum;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.sum;
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return `[${this.nums}]`
};

const obj2 = new ArrayWrapper([3, 4]);
const obj1 = new ArrayWrapper([1, 2]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
