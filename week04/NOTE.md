学习笔记

week04 DFS, BFS, greedy, binary search


+ 搜索
    - 深搜 - 递归，注意深度和爆栈的可能性
    - 宽搜 - 用队列，图上的宽搜较为常见，或者把一些问题抽象成图的问题
    - 启发式 A*
+ 贪心  尝试用局部最优得到全局最优
    - 必须能够证明问题可以用贪心（面试当中很难去证明一个新的贪心题。。）
    - 一样的题 给出不一样的条件可导致贪心失效（换硬币）
    - 贪心一旦用了就是最优解， 无脑一贪到底 没有回溯 没有记录
    - 每个贪心都不一样，没有通用性
+ 二分查找
    - 满足条件可用： 有序，有边界，可下标访问
    - 二分思想是减少一半的无效空间寻找答案
    - 二分的变形- 倍增法 向后没有具体边界的时候可乘2的速度向后寻找，下标以2^n 级增长


+ 作业题目：使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序的地方
说明：同学们可以将自己的思路、代码写在第 4 周的学习总结中
    - 找出中间无序也就等于找出最小值，最小值即是数组被旋转之前的第一个数也就是最小值, 代码如下， 最后剩下的start和end 即是无序的地方
```
public int findMin(int[] nums) {
    if(nums[0] <= nums[nums.length - 1]) return nums[0];
    
    int start = 0, end = nums.length - 1;
    
    while(start + 1 < end) {
        int mid = start + ((end - start) >> 1);
        
        if(nums[start] <= nums[mid]) start = mid;
        else end = mid;
    }
    return Math.min(nums[start], nums[end]);
}
```