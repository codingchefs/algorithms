/**
 * Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search
 * tree with minimal height.
 *
 * Solution:
 * The middle of each subsection of the array becomes the root of the node. The left half of the array will become our
 * left subtree, and the right half of the array will become the right subtree.
 * The algorithm is as follows:
 1. Insert into the tree the middle element of the array.
 2. Insert (into the left subtree) the left sub array elements.
 3. Insert(into the right subtree)the right sub array elements.
 4. Recurse.
 */

const assert = require('assert');
const Node = require('./Node');

const buildMinimalTree = (arr) => {
  return buildMinimalTreeImpl(array, 0, arr.length - 1);
};

const buildMinimalTreeImpl = (arr, start, end) => {
  if(start > end) {
    return null;
  }
  const mid = Math.floor((start + end)/2);
  const n = new Node(arr[mid]);
  n.left = buildMinimalTreeImpl(arr, start, mid - 1);
  n.right = buildMinimalTreeImpl(arr, mid + 1, end);
  return n;
};

const array = [1, 2, 3, 4, 5, 7];
const root = buildMinimalTree(array);
const result = {
  "data": 3,
  "left": {
    "data": 1,
    "left": null,
    "right": {
      "data": 2,
      "left": null,
      "right": null
    }
  },
  "right": {
    "data": 5,
    "left": {
      "data": 4,
      "left": null,
      "right": null
    },
    "right": {
      "data": 7,
      "left": null,
      "right": null
    }
  }
};
assert.equal(JSON.stringify(root), JSON.stringify(result));
console.log('==== ALL TESTS PASSED! ===');
