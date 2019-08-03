package tree.cci;
class Node {
    int data;
    Node root;
    Node left;
    Node right;
    Node(int data) {
        root = null;
        this.data = data;
        this.left = null;
        this.right =null;
    }
}