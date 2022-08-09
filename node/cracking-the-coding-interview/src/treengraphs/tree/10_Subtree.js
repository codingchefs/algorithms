/**
 * BST Sequences: A binary search tree was created by traversing through an array from left to right and inserting each
 * element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this
 * tree.
 * https://www.youtube.com/watch?v=E36O5SWp-LE
 * Edge cases:
 * if s & t are null, return true.
 * if s exists, & t is null, return true
 * if s doesnt exist & t exists, return false
 * if both trees are same, return true
 * if both tree not same, check left and right for subtree to be same
 */

const assert = require('assert');
const TreeNode = require('./Node');

const isSubTree = (s, t) => {
  // if t is null, return true
  if(!t) return true;
  // if s is null, return false
  if(!s) return false;
  // check if s & t sameTree
  if(sameTree(s, t)) return true;
  // check if t is same as s.left or s.right
  return (isSubTree(s.left, t) || isSubTree(s.right, t));
};

const sameTree = (s, t) => {
  // if both subtrees are null, return true
  if(!s && !t) return true;
  // if both subtrees are not null but value is same, check left and right recursively
  if(s && t && s.data === t.data) {
    return sameTree(s.left, t.left) && sameTree(s.right, t.right);
  }

  return false;
};

let s = new TreeNode(3);
s.left = new TreeNode(4);
s.right = new TreeNode(5);
s.left.left = new TreeNode(1);
s.left.right = new TreeNode(2);

let t = new TreeNode(4);
t.left = new TreeNode(1);
t.right = new TreeNode(2);
// assert.equal(isSubTree(s, t), true);
t.right.right = new TreeNode(3);
assert.equal(isSubTree(s, t), false);
console.log('==== ALL TESTS PASSED! ===');

