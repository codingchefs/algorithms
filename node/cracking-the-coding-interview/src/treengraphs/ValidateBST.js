/* Implement a function to check if a binary tree is a binary search tree. */
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let index = 0;
const copyBST = (root, array) => {
   if(root == null) return;
   copyBST(root.left, array);
   array[index] = root.data;
   index++;
   copyBST(root.right, array);
};

const checkBST = (root) => {
  const array  = new Array[root.length];
  copyBST(root, array);
  for(let i =0; i < array.length; i++) {
      if(array[i] <= array[i -1]) return false;
  }
  return true;
};


checkBST(root);