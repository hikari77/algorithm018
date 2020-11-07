/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
 
        if(root == null) return null; // 即是判空 也是递归的出口 也是base case 
        if(root == p || root == q) return root;  // root 本身是p 或 q的时候

        // 深搜 开始分治
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);


        if(left != null && right != null) return root; // 当前节点的左右各一个p q的时候 
        if(left != null) return left; // 左边有啥就返回啥
        if(right != null) return right; // 右边有啥就返回啥
        return null; // 啥都找不到
    }
}