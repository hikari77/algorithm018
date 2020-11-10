class Solution {
    public int search(int[] nums, int target) {
        int start = 0, end = nums.length - 1;
        
        while (start + 1 < end) { // +1 两个下标不会重叠，防止死循环
            int mid = start + ((end - start) / 2); // 防止溢出
            
            if (nums[mid] == target) return mid;
            if (nums[start] <= nums[mid]) { // pivot 被选到上半部分的时候
                if (nums[start] <= target && target < nums[mid]) // target 位于 start 于mid 中间
                    end = mid; //  丢弃后半部
                else
                    start = mid;
            } else { // pivot 在下半部分
                if(nums[mid] < target && target <= nums[end]) // target 位于 mid 和 end中间
                    start = mid; // 丢弃前半部分
                else
                    end = mid;
            }
        }
        // 两者中一个事答案 或 都不是答案
        if (nums[start] == target) return start; 
        if (nums[end] == target) return end;
        return -1;
    }
}