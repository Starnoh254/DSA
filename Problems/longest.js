/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let result = []
    let size = nums.length
    result.fill( 1 , 0 , size );
    
    for (let i = 1 ; i < nums.length ; i ++){
        for(let j = 0 ; j < i ; j ++){
            if( (nums[i] < nums[j]) &&  (result[i] <= result[j]) ){
                result[i] = 1 + result[j]
            }
        }
    }

    return Math.max(...result)
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
