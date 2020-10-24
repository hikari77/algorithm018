/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(nums) {
    
    for(let i = nums.length - 1; i >= 0; i--) {
        if(++nums[i] === 10) nums[i] = 0;
        else return nums;
        if(i === 0 && nums[i] === 0) nums.unshift(1)
    }
    return nums;
};