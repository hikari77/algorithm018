/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(nums) {
    if(nums.length === 0) return 0;
    
    let left = 0, right = nums.length - 1, water = 0;
    let left_max = nums[left], right_max = nums[right];
    
    while(left <= right) {
        if(left_max < right_max) {
            left_max = Math.max(left_max, nums[left]);
            water += (left_max - nums[left]);
            left += 1;
        } else {
            right_max = Math.max(right_max, nums[right]);
            water += (right_max - nums[right]);
            right -= 1;
        }
    }
    return water;
};

