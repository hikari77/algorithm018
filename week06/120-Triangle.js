/**
 * @param {number[][]} triangle
 * @return {number}
 * Time: O(n)  Space: O(n)  n为triangle 元素的个数
 * 可以直接在triangle[i][j] 记录状态，空间为O1  但是这样做会改变输入
 */
var minimumTotal = function(triangle) {
    let n = triangle.length;

    // 创建与输入一样大小的数组
    let dp = new Array(n).fill(0);
    for (let i = 1; i <= n; ++i) {
        dp[i - 1] = new Array(i).fill(0);
    }
    //  初始化 左右两个边， 由于这些位置的状态只依赖一个来源 所以预先手动初始化，在下面就不用判断
    dp[0][0] = triangle[0][0];
    for (let i = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][0] + triangle[i][0];
        dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
    }
    // 状态dp[i][j] 表示 到i,j 这个点的目前为止最小路径和
    for (let i = 2; i < n; ++i) {
        for (let j = 1; j < i; ++j) {
            // 由题意指出只能向下走相邻的点， i，j 的依赖只取决于 i-1,j-1 或者 i-1,j  
            // 故此从2个可能的依赖中选择小的值累加到当前的值
            dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];  
        }
    }
    // 答案是最后一层的最小值，表示该点是所有
    return Math.min(...dp[n - 1]);
};


/**
 * @param {number[][]} triangle
 * @return {number}
 * Time: O(n^2) Space:  O(n)   n为三角形的高度 也就是 tri.length
 *  取余的滚动数组优化方式的好处是 不用改代码， 上面代码的外循环 i 直接取余就可以优化
 */
var minimumTotal2 = function(tri) {
    let n = tri.length;
    // 2 * n 的滚动数组
    let dp = [new Array(n).fill(0), new Array(n).fill(0)];
    // 初始化
    dp[0][0] = tri[0][0];
    
    for (let i = 1; i < n; ++i) {
        // 左右边的状态要单独计算且 把取余操作用变量抽出代码变短且计算量减少，但是可读性觉得差一点
        let ii = i % 2, i1 = (i - 1) % 2;
        dp[ii][0] = dp[i1][0] + tri[i][0];
        dp[ii][i] = dp[i1][i - 1] + tri[i][i];
        
        for (let j = 1; j < i; ++j) {
            dp[ii][j] = Math.min(dp[i1][j - 1], dp[i1][j]) + tri[i][j];
        }
    }
    return Math.min(...dp[(n - 1) % 2]);
};
