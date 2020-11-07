class Solution {
    public List<List<Integer>> permute(int[] nums) {

        // 本题目46给出 都是distinct 所以没必要排序， 题目47.全排列2 需要排序
        List<List<Integer>> res = new ArrayList<>();
        Set<Integer> visited = new HashSet<>();
        dfs(nums, res, new ArrayList(), visited);
        return res;
    }
    
    private void dfs(int[] nums, List<List<Integer>> res, 
                     List<Integer> temp, Set<Integer> visited) {
        // 递归出口
        if(temp.size() == nums.length) {
            res.add(new ArrayList(temp));
            return;
        }
        
        // 循环数组
        for(int i = 0; i < nums.length; i++) {
            if(visited.contains(nums[i])) continue;
            
            temp.add(nums[i]);
            visited.add(nums[i]);
            dfs(nums, res, temp, visited);
            visited.remove(nums[i]); // 删除访问记录
            temp.remove(temp.size() - 1); // 回溯答案状态
        }
    }
}