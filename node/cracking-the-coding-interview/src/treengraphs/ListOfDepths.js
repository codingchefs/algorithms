/* List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have Dlinked lists).
* time complexity: O(N) */
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class LLNode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        const node = new LLNode(element);
        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }
}

const createLevelLinkedListRe = (node, lists, level) => {
    if (node == null) return;

    let ll;
    if (lists.length === level) {
        ll = new LinkedList();
        lists.push(ll);
    } else {
        ll = lists[level];
    }
    ll.add(node);
    createLevelLinkedListRe(node.left, lists, level + 1);
    createLevelLinkedListRe(node.right, lists, level + 1);
};

const createLevelLinkedList = (root) => {
    const lists = [];
    createLevelLinkedListRe(root, lists, 0);
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
console.log(lists);