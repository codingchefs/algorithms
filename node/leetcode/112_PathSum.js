/**
 * 112. Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such
 * that adding up all the values along the path equals targetSum. A leaf is a node with no children.
 */

const TreeNode = require('../cracking-the-coding-interview/src/treengraphs/tree/Node');
const assert = require('assert');
const hasPathSum = (root, targetSum) => {
  // base case
  if (!root) return false;

  // if it is a leaf node and if the targetSum - root val is 0, return true
  if (root.left === null && root.right === null && targetSum - root.data === 0) {
    return true;
  } else {
    // check left side and right side recursively for rest of the total
    return (hasPathSum(root.left, targetSum - root.data) ||
      hasPathSum(root.right, targetSum - root.data));
  }
};

const treeNode = new TreeNode(5);
treeNode.left = new TreeNode(4);
treeNode.left.left = new TreeNode(11);
treeNode.left.left.left = new TreeNode(7);
treeNode.left.left.right = new TreeNode(2);
treeNode.right = new TreeNode(8);
treeNode.right.right = new TreeNode(4);
treeNode.right.left = new TreeNode(13);

assert.equal(hasPathSum(treeNode, 22), true);

const treeNode2 = new TreeNode(2);
treeNode2.left = new TreeNode(1);
treeNode2.right = new TreeNode(3);

assert.equal(hasPathSum(treeNode2, 5), true);
assert.equal(hasPathSum(treeNode2, 4), false);
console.log('==== ALL TESTS PASSED! ===');