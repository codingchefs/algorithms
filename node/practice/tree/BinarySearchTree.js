const Node = require('./TreeNode');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        // creating a node and initialization with data
        const newNode = new Node(data);
        // root is null then node will be added to the tree and made root.
        if (this.root === null) {
            this.root = newNode;
        } else {
            // find the correct position in the tree and add the node.
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        // if the data is less than the node, data move left of the treee
        if (newNode.data < node.data) {
            // if left is null insert node here
            if (node.left === null) {
                node.left = newNode;
            }
            // if left is not null, recur until null is found
            else {
                this.insertNode(node.left, newNode);
            }
        }

        // if the data is more than the node data move right of the tree
        else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (node === null) {
            return null;
        } else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            const aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }

    }

    inorder(node) {
        if(node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if(node !== null) {
            this.inorder(node.data);
            console.log(node.left);
            this.inorder(node.right);
        }
    }

    postorder(node) {
        if(node !== null) {
            this.inorder(node.left);
            console.log(node.right);
            this.inorder(node.data);
        }
    }

    findMinNode(node) {
        // if left of a node is null, then it must be the minimum node
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    getRootNode() {
        return this.root;
    }

    search(node, data) {
        if (node == null)
            return null;

        else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return node;
        }
    }
}

const BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
BST.insert(26);
BST.insert(30);

const root = BST.getRootNode();

BST.remove(25);

