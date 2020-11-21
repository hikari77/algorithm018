/**
 * @param {string} s
 * @return {number}
 * Time: O(n^2)  Space: O(n^2)
 */
var countSubstrings = function(s) {
    let n = s.length, res = 0;
    let dp = new Array(n).fill(0).map(x => new Array(n).fill(0));
    //  j, i 代表字符串下标       dp[j][i] 表示 j 到 i 的子串是不是回文状态，
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j <= i; ++j) {
            // 假如两端字符一样 此时有2个条件满足一个的话此段ji 就是回文
            // 1. i-j <= 2 表示 字符是自己 || 2个挨着的 || aba 这种中间夹着一个的 
            // 2. j i 两端的最近的一层 也就是 j+1, i-1 若是回文的话也成立
            if (s[j] === s[i] && (i - j <= 2 || dp[j + 1][i - 1] === 1)) {
                dp[j][i] = 1;
                res += dp[j][i];
            }
        }
    }
    return res;
};