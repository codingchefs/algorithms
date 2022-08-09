/**
 * First Common Ancestor: Design an algorithm and write code to find the first common ancestor of two nodes in a binary
 * tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.
 */

const assert = require('assert');
const TreeNode = require('./Node');
const lowestCommonAncestor = (root, p, q) => {
  // base cases
  if(!root) return null;
  if(root.data === p || root.data === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if(left && right) return root;

  return (left) ? left : right;
};

let root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

assert.equal(lowestCommonAncestor(root, 5, 1).data, 3);
assert.equal(lowestCommonAncestor(root, 5, 4).data, 5);
assert.equal(lowestCommonAncestor(root, 5, 8).data, 3);
console.log('==== ALL TESTS PASSED! ===');
