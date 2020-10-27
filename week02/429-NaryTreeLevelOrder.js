/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    let res = [], que = [root];
    
    while(que.length) {
        let size = que.length;
        let temp = [];
        for(let i = 0;i < size; i++) {
            let cur = que.shift();
            temp.push(cur.val)
            cur.children && cur.children.forEach(n => que.push(n))
        }
        res.push(temp);
    }
    return res;
};