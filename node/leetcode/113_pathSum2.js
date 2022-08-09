/**
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node
 * values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.
 A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
 */

const TreeNode = require('../cracking-the-coding-interview/src/treengraphs/tree/Node');
const assert = require('assert');
const pathSum = (root, targetSum) => {
  const paths = [];
  findPaths(root, targetSum, [], paths);
  return paths;
};

const findPaths = (root, targetSum, currentList, paths) => {
  // base case
  if (!root) return null;

  currentList.push(root.data);
  if (root.left === null && root.right === null && targetSum - root.data === 0) {
    paths.push(currentList);
    return;
  }

  findPaths(root.left, (targetSum - root.data), [...currentList], paths);
  findPaths(root.right, (targetSum - root.data), [...currentList], paths);
};

const treeNode = new TreeNode(5);
treeNode.left = new TreeNode(4);
treeNode.left.left = new TreeNode(11);
treeNode.left.left.left = new TreeNode(7);
treeNode.left.left.right = new TreeNode(2);
treeNode.right = new TreeNode(8);
treeNode.right.right = new TreeNode(4);
treeNode.right.left = new TreeNode(13);
treeNode.right.right.left = new TreeNode(5);
treeNode.right.right.right = new TreeNode(1);

assert.deepEqual(pathSum(treeNode, 22), [[5,4,11,2],[5,8,4,5]]);

const treeNode2 = new TreeNode(1);
treeNode2.left = new TreeNode(2);
treeNode2.right = new TreeNode(3);

assert.deepEqual(pathSum(treeNode2, 5), []);
console.log('==== ALL TESTS PASSED! ===');