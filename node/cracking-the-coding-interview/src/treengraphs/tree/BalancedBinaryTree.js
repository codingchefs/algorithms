const TreeNode = require('./Node');
const assert = require('assert');

const checkHeight = (node) => {
  // base case
  if (node === null) return -1;

  // get left subtree height
  const leftSubtreeHeight = checkHeight(node.left);
  if (leftSubtreeHeight === Number.MIN_VALUE) {
    return Number.MIN_VALUE;
  }

  // get right subtree height
  const rightSubtreeHeight = checkHeight(node.right);
  if (rightSubtreeHeight === Number.MIN_VALUE) {
    return Number.MIN_VALUE;
  }
  // get difference of height
  const heightDifference = leftSubtreeHeight - rightSubtreeHeight;
  // if diff is more than 1 return error/negative
  if (Math.abs(heightDifference) > 1) {
    return Number.MIN_VALUE;
  } else {
    // else return max of two heights + 1
    return Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
  }
};

const isBalanced = (node) => {
  return checkHeight(node) !== Number.MIN_VALUE;
};

let root = new TreeNode(5);
root.left = new TreeNode(10);
root.right = new TreeNode(15);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(25);
root.right.left = new TreeNode(30);
root.right.right = new TreeNode(35);
root.right.right.right = new TreeNode(40);
// root.right.right.right.right = new TreeNode(45);
assert.equal(isBalanced(root), true);
console.log('==== ALL TESTS PASSED! ===');