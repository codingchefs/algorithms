/**
 * Random Node: You are implementing a binary search tree class from scratch, which, in addition to insert, find, and
 * delete, has a method getRandomNode() which returns a random node from the tree. All nodes should be equally likely
 * to be chosen. Design and implement an algorithm for getRandomNode, and explain how you would implement the rest of
 * the methods.
 */
const TreeNode = require('./Node');
class RandomNode extends TreeNode {
  constructor(data, children) {
    super();
    this.data = data;
    this.left = null;
    this.right = null;
    this.children = children || 0 ;
  }

  getRandomNode() {
    if(this === null) throw new Error('Runtime error');
    const count = Math.floor(Math.random() * (this.children + 1));
    return this.getRandomNodeImpl(this, count);
  }

  getRandomNodeImpl(curr, count) {
    // 3 cases
    if(count === this.getChildren(curr.left)) return curr.data;
    if(count < this.getChildren(curr.left)) return this.getRandomNodeImpl(curr.left, count);
    if(count > this.getChildren(curr.left)) return this.getRandomNodeImpl(curr.right, (count - this.getChildren(curr.left) - 1));
  }

  getChildren(n) {
    if(n === null) return 0;
    return (n.children + 1);
  }
}

const randomNode = new RandomNode(4, 6);
randomNode.left = new RandomNode(2, 2);
randomNode.left.left = new RandomNode(1, 0);
randomNode.left.right = new RandomNode(3, 0);
randomNode.right = new RandomNode(6, 2);
randomNode.right.right = new RandomNode(7, 0);
randomNode.right.left = new RandomNode(5, 0);

console.log(randomNode.getRandomNode());