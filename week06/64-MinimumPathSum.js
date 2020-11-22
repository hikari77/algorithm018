/**
 * @param {number[][]} grid
 * @return {number}
 * Time: O(m * n),  Space: O(1)
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;

    // 不复制直接覆盖 grid[i][j] 的值的话space可到 O(1)
    // spread operator 2维的时候是浅拷贝，此时dp中的数组仍然指向 grid中的数组，所以这也是再修改input
    // 这么写唯一的好处就是 dp += 即可 不用加grid[i][j], 仅此一个好处。
    let dp = [...grid];
    
    // 若循环里不想判断可先初始化成如下，把0行0列的状态初始化
    // for (let j = 1; j < n; ++j) { dp[0][j] += dp[0][j - 1] }
    // for (let i = 1; i < m; ++i) { dp[i][0] += dp[i - 1][0] }


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