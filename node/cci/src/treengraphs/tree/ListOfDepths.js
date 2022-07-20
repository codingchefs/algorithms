/**
 * Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you
 * have a tree with depth D, you'll have D linked lists).
 */
const TreeNode = require('./Node');
const LinkedList = require('./LinkedList');

const createLevelLinkedListImpl = (node, lists, level) => {
  if(node === null) return;

  let ll;
  if (lists.length === level) {
    ll = new LinkedList();
    lists.push(ll);
  } else {
    ll = lists[level];
  }
  ll.add(node);

  createLevelLinkedListImpl(node.left, lists, level + 1);
  createLevelLinkedListImpl(node.right, lists, level + 1);
};

const createLevelLinkedList = (element) => {
  const lists = [];
  createLevelLinkedListImpl(element, lists, 0);
  return lists;
};

let root = new TreeNode(5);
root.left = new TreeNode(10);
root.right = new TreeNode(15);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(25);
root.right.left = new TreeNode(30);
root.right.right = new TreeNode(35);
const lists = createLevelLinkedList(root);
console.log(JSON.stringify(lists));