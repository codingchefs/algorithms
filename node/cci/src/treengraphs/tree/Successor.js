/**
 * Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree.
 * You may assume that each node has a link to its parent.
 * https://www.youtube.com/watch?v=vo794ruCJnU
 */

const assert = require('assert');
const TreeNode = require('./Node');
const successor = (root, p) => {
  let successorVal = null;
  while (root != null) {
    // if p.val >= root.value, go to the right subtree
    if (p.data >= root.data) {
      root = root.right;
    } else {
      // else val will be possible successor and go to the left subtree
      successorVal = root.data;
      root = root.left;
    }
  }

  return successorVal;
};

// 1. positive test
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);

let ele = new TreeNode(4);
assert.equal(successor(root, ele), 5);

let root2 = new TreeNode(7);
root2.left = new TreeNode(4);
root2.right = new TreeNode(10);
root2.left.left = new TreeNode(2);
root2.left.right = new TreeNode(6);
root2.left.right.left = new TreeNode(5);
root2.right.left = new TreeNode(8);
root2.right.right = new TreeNode(12);

let p1 = new TreeNode(4);
assert.equal(successor(root2, p1), 5);

p1 = new TreeNode(12);
assert.equal(successor(root2, p1), null);

p1 = new TreeNode(2);
assert.equal(successor(root2, p1), 4);

console.log('==== ALL TESTS PASSED! ===');
