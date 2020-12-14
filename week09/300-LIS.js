/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 初始化状态为1 元素本身就是长度为1的LIS
    // dp[i] 下标以i结尾的元素时的当前LIS
    let dp = new Array(nums.length).fill(1);
    
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[j] < nums[i])
                dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
    return Math.max(...dp);
};