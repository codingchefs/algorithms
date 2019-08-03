/* Check Balanced: Implement a function to check if a binary tree is balanced.
For the purposes of this question, a balanced tree is defined to be a tree such
that the heights of the two subtrees of any node never differ by more than one. */
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const checkHeight = (root) => {
    if(root === null) return -1;
    let leftHeight = checkHeight(root.left);
    if(leftHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;

    let rightHeight = checkHeight(root.right);
    if(rightHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;

    const heightDiff = leftHeight - rightHeight;
    if(Math.abs(heightDiff) > 1) {
        return Number.MIN_SAFE_INTEGER;
    } else {
        return Math.max(leftHeight, rightHeight) + 1;
    }
};

const isBalanced = (root) => {
    return checkHeight(root) !== Number.MIN_SAFE_INTEGER;
};


let root = new TreeNode(5);
root.left = new TreeNode(10);
root.right = new TreeNode(15);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(25);
root.right.left = new TreeNode(30);
root.right.right = new TreeNode(35);
root.right.right.right = new TreeNode(40);
root.right.right.right.right = new TreeNode(45);
const res = isBalanced(root);
console.log(res);
