/**
 * 300. Longest Increasing Subsequence
 * @param {number[]} nums
 * @return {number}
 * 
 * Time: O(n^2)  Space: O(n) 
 */
var lengthOfLIS = function(nums) {
    if(!nums || nums.length === 0) return 0;
    //dp[i] is current LIS of end with [i]th element
    let dp = new Array(nums.length).fill(1);
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i])
                dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
    return Math.max(...dp)
};