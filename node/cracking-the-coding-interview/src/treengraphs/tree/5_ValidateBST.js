/**
 * Implement a function to check if a binary tree is a binary search tree.
 * inorder traversal
 * solution 1: Our first thought might be to do an in-order traversal, copy the elements to an array, and then check to
 * see if the array is sorted. This solution takes up a bit of extra memory, but it works-mostly.
 * 
 */

const assert = require('assert');
const TreeNode = require('./Node');
const validateBST = (root) => {
  return validate(root, Number.MIN_VALUE, Number.MAX_VALUE);
};

const validate = (root, min, max) => {
  // base case
  if (root === null) {
    return true;
  } else if ((max != null && root.data >= max) ||
      (min != null && root.data <= min)) {
    return false;
  } else {
    return validate(root.left, min, root.data) && validate(root.right, root.data, max);
  }
}

// 1. positive test
let root = new TreeNode(20);
root.left = new TreeNode(10);
root.right = new TreeNode(30);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(15);
root.left.right.right = new TreeNode(17);
root.left.left.right = new TreeNode(7);
root.left.left.left = new TreeNode(3);

assert.equal(validateBST(root), true);

// 2. negative test
let root2 = new TreeNode(5);
root2.left = new TreeNode(3);
root2.right = new TreeNode(7);
root2.right.left = new TreeNode(4);
root2.right.right = new TreeNode(8);
assert.equal(validateBST(root2), false);

console.log('==== ALL TESTS PASSED! ===');