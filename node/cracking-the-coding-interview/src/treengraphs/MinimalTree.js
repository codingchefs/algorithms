class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    createMinimalBST(arr) {
        return this.createMinimalBSTRe(arr, 0, arr.length - 1);
    }

    createMinimalBSTRe(arr, start, end) {
        if (end < start) {
            return null;
        }

        let mid = Math.floor((start + end) / 2);
        const n = new Node(arr[mid]);
        n.left = this.createMinimalBSTRe(arr, start, mid - 1);
        n.right = this.createMinimalBSTRe(arr, mid + 1, end);
        return n;
    }
}

const bst = new BinarySearchTree();

// int a[] = {2, 7, 4, 1, 5, 3};
const a = [1, 2, 3, 4, 5, 7];
const root = bst.createMinimalBST(a);
console.log("Done!");

