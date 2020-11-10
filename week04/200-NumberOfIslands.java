/* 关于使用visited 哈希set 或者 boolean[][] 来表示记录已访问的点。
    此题解中的 grid[x][y] = '0' 的形式来改变访问记录是在修改输入数据，这样不是很好。
    故此应该用 哈希set 或者 布尔数组来表示访问状态 虽然这么做会增加空间复杂度，但这是 better practice than revise input
*/
class Solution {
    public int numIslands(char[][] grid) {
        if (grid.length == 0) return 0;
        int m = grid.length, n = grid[0].length;
        int count = 0;
        
        for (int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                // 碰到未访问过 以及有效的点的时候进入宽搜阶段，宽搜结束表明已完成当前连通块的搜索
                if(grid[i][j] == '0') continue;
                bfs(grid, i, j); 
                count++;
            }
        }
        return count;
    }
    
    private void bfs(char[][] grid, int x, int y) {
        int[][] STEPS = {{0, 1}, {-1, 0}, {0, -1}, {1, 0}}; // 可移动的4个方向
        Queue<int[]> queue = new LinkedList<>();

        queue.offer(new int[]{x, y});
        grid[x][y] = '0'; // 入队后 标记已访问的点
        
        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            for (int[] step : STEPS) { // 计算下一个坐标 n_x 意为 next_x 
                int n_x = cur[0] + step[0];
                int n_y = cur[1] + step[1];

                if (!isValid(grid, n_x, n_y)) continue;
                queue.offer(new int[]{n_x, n_y});
                grid[n_x][n_y] = '0';
            }
        }
        
    }
    
    private boolean isValid(char[][] grid, int x, int y) {
        int m = grid.length, n = grid[0].length;
        return !(x < 0 || x >= m || y < 0 || y >= n || grid[x][y] == '0');
    }
}