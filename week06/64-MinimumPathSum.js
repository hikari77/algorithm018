/**
 * @param {number[][]} grid
 * @return {number}
 * Time: O(m * n),  Space: O(m * n)
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;

    // 不复制直接覆盖 grid[i][j] 的值的话space可到 O(1),  但是为了不修改input
    // 故此这里是复制后是 O(m*n)的space
    let dp = [...grid];
    

    // dp[i][j] 到达当前路径的最小路径和的状态， 依赖是i,j-1 和i-1,j 故此从中选一个小的累加到当前值
    // 由于没有预先初始化 第0行 第0列要判断后累加, 或初始化可在此上加2次for 循环初始化0行0列的状态即可
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j > 0)
                dp[i][j] += dp[i][j - 1];
            else if (j === 0 && i > 0)
                dp[i][j] += dp[i - 1][j];
            else if (i > 0 && j > 0)
                dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    return dp[m - 1][n - 1];
};



/**
 * @param {number[][]} grid
 * @return {number}
 * Time: O(m * n),  Space: O(2 * n)
 */
var minPathSum2 = function(grid) {
    let m = grid.length, n = grid[0].length;
    // 只有一行的时候， 直接累加到最后
    if (m == 1) {
        return grid[0].reduce((ans, cur) => ans + cur);
    }
    
    // 滚动数组优化空间， 把grid 前2行数据复制过来
    let dp = [[...grid[0]], [...grid[1]]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j > 0)
                dp[i % 2][j] = dp[i % 2][j - 1] + grid[i][j];
            else if (j === 0 && i > 0)
                dp[i % 2][j] = dp[(i - 1) % 2][j] + grid[i][j];
            else if (i > 0 && j > 0)
                dp[i % 2][j] = Math.min(dp[(i - 1) % 2][j], dp[i % 2][j - 1]) + grid[i][j];
        }
    }

    return dp[(m - 1) % 2][n - 1];
};