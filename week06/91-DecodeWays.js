/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s === null || s.length === 0 || s[0] === '0') return 0;
    let n = s.length;
    let dp = new Array(n + 1).fill(0);
    // dp[i] 前i个方案总数
    dp[0] = 1, dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        // 当前数字为一位时 是否满足
        let d1 = Number(s.slice(i - 1, i));
        if (d1 >= 1 && d1 <=9)
            dp[i] += dp[i - 1];
        // 当前与前面一位 组成2位数字时 是否满足
        let d2 = Number(s.slice(i - 2, i));
        if (d2 >= 10 && d2 <= 26)
            dp[i] += dp[i -2];
    }
    return dp[n];
};