/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length, n = text2.length;
    // 滚动数组 空间优化 Space： O(2 * n),  Time: O(mn)
    let dp = [new Array(n + 1).fill(0), new Array(n + 1).fill(0)]
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] !== text2[j - 1])
                dp[i % 2][j] = Math.max(dp[(i - 1) % 2][j], dp[i % 2][j - 1]);
            else
                dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
        }
    }
    return dp[m % 2][n];
};


// 2维数组 推导dp[i][j],  Time: O(mn)  Space: O(mn)
var longestCommonSubsequence2 = function(text1, text2) {
    let m = text1.length, n = text2.length, dp = [];

    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] !== text2[j - 1])
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            else
                dp[i][j] = dp[i - 1][j - 1] + 1;
        }
    }
    return dp[m][n];
};