/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 滚动数组 Space: O(2n) -> O(n)
    let dp = [new Array(n).fill(1), new Array(n).fill(0)];
    dp[1][0] = 1;
    
    // dp[i][j] 到ij这个点的路径总数
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[i % 2][j] = dp[(i - 1) % 2][j] + dp[i % 2][j - 1];
        }
    }
    return dp[(m - 1) % 2][n - 1];
};