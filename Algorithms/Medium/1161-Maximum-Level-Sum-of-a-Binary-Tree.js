/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sum = new Array(1000 + 1).fill(0);
var maxLevelSum = function(root) {
    sum[1] = root.val;
    traceSum(root.right, 2);
    traceSum(root.left, 2);

    let res = sum.indexOf(Math.max(...sum));
    sum = new Array(1000 + 1).fill(0);
    return res;

};

var traceSum = function(root, level) {
    if (root === null) {
        return;
    }

    traceSum(root.right, level + 1);
    traceSum(root.left, level + 1);

    sum[level] += root.val;
}