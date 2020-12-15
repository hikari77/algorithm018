/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(grid) {
    if (grid[0][0] === 1) return 0;
    
    let m = grid.length, n = grid[0].length;
    let dp = new Array(m).fill(0).map(x => new Array(n).fill(0));
    
    // 初始化0行0列
    dp[0][0] = 1;
    for (let i = 1; i < n; ++i)
        dp[0][i] = (grid[0][i] == 0 && dp[0][i - 1] == 1) ? 1 : 0;
    
    for (let i = 1; i < m; ++i) 
        dp[i][0] = (grid[i][0] == 0 && dp[i - 1][0] == 1) ? 1 : 0;

    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            if (grid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    
    return dp[m - 1][n - 1];
};

// 另一种初始化， 矩阵很大且石头靠前摆放时会提前break 后面默认为0 不用计算
const initStates = (grid, dp, m, n) => {
    for (let i = 0; i < n; ++i) {
        if (grid[0][i] === 1) {
            dp[0][i] = 0;
            break;
        } else {
            dp[0][i] = 1;
        }
    }
    
    for (let i = 0; i < m; ++i) {
        if (grid[i][0] === 1) {
            dp[i][0] === 0;
            break;
        } else {
            dp[i][0] = 1;
        }
    }
}