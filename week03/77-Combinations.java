class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> res = new ArrayList<>();
        dfs(n, k, res, new ArrayList(), 1);
        return res;
    }
    
    private void dfs(int n, int k, List<List<Integer>> res, List<Integer> temp, int index) {
        // 出口1 后面所剩下的长度不足以满足k的时候提前退出
        if (temp.size() + (n - index + 1) < k) {
            return;
        }
        // 出口2 满足条件 添加答案
        if(temp.size() == k) {
            res.add(new ArrayList(temp)); // 一定要copy 新的
            return;
        }
        // 从 1 循环至 n  深搜+回溯
        for(int i = index; i <= n; i++) {
            temp.add(i);
            dfs(n, k, res, temp, i + 1);
            temp.remove(temp.size() - 1);
        }
    }
}
