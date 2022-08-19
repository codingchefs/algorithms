/**
 * TODO revisit later
 * Paths with Sum: You are given a binary tree in which each node contains an integer value (which might be positive or
 * negative). Design an algorithm to count the number of paths that sum to a given value. The path does not need to
 * start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
 * Time complexity and space complexity O(1)
 */
const assert = require('assert');
const TreeNode = require('./Node');
let list;
let count;
const getPathSums = (root, sum) => {
  list = [];
  count = 0;
  getSum(root, sum);
  return count;
};

const getSum = (root, sum) => {
  // base case
  if (!root) return null;
  // push elements to list
  list.push(root.data);
  // recurse through left and right
  getSum(root.left, sum);
  getSum(root.right, sum);

  // find sum of elements in the list from backwards and see if it is equal to sum
  let temp = 0;
  for (let i = list.length - 1; i >= 0; i--) {
    temp += list[i];
    if (temp === sum) {
      count++;
    }
  }

  // remove last element
  list.pop();

};


const treeNode = new TreeNode(10);
treeNode.left = new TreeNode(5);
treeNode.left.left = new TreeNode(3);
treeNode.left.right = new TreeNode(2);
treeNode.left.right.right = new TreeNode(1);
treeNode.left.left.left = new TreeNode(3);
treeNode.left.left.right = new TreeNode(-2);
treeNode.left.right = new TreeNode(2);
treeNode.left.right.right = new TreeNode(1);
treeNode.right = new TreeNode(-3);
treeNode.right.right = new TreeNode(11);

assert.equal(getPathSums(treeNode, 8), 3);
assert.equal(getPathSums(treeNode, 18), 3);
console.log('==== ALL TESTS PASSED! ===');