const TreeNode = require('./treeNode');
/**
 * Problem Description
 Given a binary tree, return the inorder traversal of its nodes' values.
 NOTE: Using recursion is not allowed.

 Problem Constraints
 1 <= number of nodes <= 105

 Input Format
 First and only argument is root node of the binary tree, A.

 Output Format
 Return an integer array denoting the inorder traversal of the given binary tree.

 Example Input
 Input 1:
 1
 \
 2
 /
 3

 Input 2:
 1
 / \
 6   2
 /
 3

 Example Output
 Output 1:
 [1, 3, 2]

 Output 2:
 [6, 1, 3, 2]

 Example Explanation
 Explanation 1:
 The Inorder Traversal of the given tree is [1, 3, 2].

 Explanation 2:
 The Inorder Traversal of the given tree is [6, 1, 3, 2].

 */

const visit = (node) => {
  // console.log(node.data);
  process.stdout.write(`${node.data} -> `);
};

// C L R
const preOrderTraversal = (node) => {
  if (node != null) {
    visit(node);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
};

// L C R
const inOrderTraversal = (node) => {
  if (node != null) {
    inOrderTraversal(node.left);
    visit(node);
    inOrderTraversal(node.right);
  }
};

// L R C
const postOrderTraversal = (node) => {
  if (node != null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    visit(node);
  }
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log('preOrderTraversal')
preOrderTraversal(root);
console.log('\ninOrderTraversal')
inOrderTraversal(root);
console.log('\npostOrderTraversal')
postOrderTraversal(root);

