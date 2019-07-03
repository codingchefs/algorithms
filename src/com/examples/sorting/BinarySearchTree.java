package com.examples.sorting;

import java.util.LinkedList;
import java.util.Queue;

public class BinarySearchTree {

    class Node {
        int data;
        Node left, right;

        Node(int data){
            this.data = data;
            left = right = null;
        }
    }

    Node root;
    BinarySearchTree() {
        root = null;
    }

    void insert(int data) {
        root = insertRes(data, root);
    }

    Node insertRes(int data, Node root) {
        if(root == null) {
            root = new Node(data);
            return root;
        }

        if(data > root.data) {
            root.right = insertRes(data, root.right);
        } else {
            root.left = insertRes(data, root.left);
        }

        return root;
    }

    Node search(Node root, int data) {
        if (root == null || root.data == data) {
            return root;
        }

        if (data > root.data) {
            return search(root.right, data);
        }
        return search(root.left, data);
    }

    int findMin(Node root) {
        if(root == null) {
            System.out.println("Error: Tree is empty\n");
            return -1;
        }
        while(root.left != null) {
            root = root.left;
        }

        return root.data;
    }

    int findMax(Node root) {
        if(root == null) {
            System.out.println("Error: Tree is empty\n");
            return -1;
        }
        while(root.right != null) {
            root = root.right;
        }

        return root.data;
    }

    int findHeight(Node root) {
        if(root == null) {
            return -1;
        }
        int leftHeight = findHeight(root.left);
        int rightHeight = findHeight(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    /*void levelOrder(Node root) {
        if(root == null) return;

        Queue<Node> q = new LinkedList<>();
        q.add(root);
        System.out.println("Level Order:");
        while(!q.isEmpty()) {
            Node current = q.peek();
            System.out.println(current.data);
            if(current.left != null) q.add(current.left);
            if(current.right !=null) q.add(current.right);
            q.poll();
        }
    }*/

    void levelOrder(Node root) {
        // check if root is null
        if(root == null) {
            return;
        }

        Queue<Node> q = new LinkedList<>();
        q.add(root);

        while(!q.isEmpty()) {
            // print first element
            Node front = q.peek();
            System.out.println(front.data);
            // add left element & right element to queue
            if(front.left !=null) q.add(front.left);
            if(front.right !=null) q.add(front.right);
            q.poll();
        }
    }

    void preOrder(Node root) {
        if(root == null) {
            return;
        }

        System.out.println(root.data);

        preOrder(root.left);
        preOrder(root.right);
    }

    boolean isSubTreeLesser(Node root, int value) {
        if(root == null) return true;

        if(root.data <= value
           && isSubTreeLesser(root.left, value)
           && isSubTreeLesser(root.right, value)) {
            return true;
        }

        return false;
    }

    boolean isSubTreeGreater(Node root, int value) {
        if(root == null) return true;

        if(root.data > value
                && isSubTreeGreater(root.left, value)
                && isSubTreeGreater(root.right, value)) {
            return true;
        }

        return false;
    }

    boolean isBstUtil(Node root, int minValue, int maxValue) {
        if(root == null) return true;

        if(root.data > minValue && root.data < maxValue &&
                isBstUtil(root.left, minValue, root.data) &&
                isBstUtil(root.right, root.data, maxValue))
            return true;
        else
            return false;
    }

    boolean isBinarySearchTree2(Node root) {
        return isBstUtil(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }

    int minValue(Node root) {
        int minv = root.data;
        while(root.left != null) {
            minv = root.left.data;
            root = root.left;
        }
        return minv;
    }

    Node delete(Node root, int data) {
        if(root == null ) return root;
        else if(data < root.data) root.left = delete(root.left, data);
        else if(data > root.data) root.right = delete(root.right, data);
        else {
            // case 1: No child or single child
            if(root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            }

            //case 3: two children
            root.data = minValue(root.right);

            root.right = delete(root.right, root.data);
        }
        return root;
    }


    boolean isBinarySearchTree(Node root) {
        if(root == null) return true;
        // check for 4 conditions
        if(isSubTreeLesser(root.left, root.data) &&
           isSubTreeGreater(root.right, root.data) &&
           isBinarySearchTree(root.left) &&
           isBinarySearchTree(root.right)) {
            return true;
        }

        return false;
    }

    /*Node getSuccessor(Node root, int data) {
        Node current = find(root, data);
        if(current == null) return null;
        if(current.right != null) {
            return findMin(current.right);
        } else {
            Node successor = null;
            Node ancestor = root;
            while(ancestor != current) {
                if(current.data < ancestor.data) {
                    successor = ancestor;
                    ancestor = ancestor.left;
                } else {
                    ancestor = ancestor.right;
                }
            }
            return successor;
        }

    }*/

    public static void main(String[] args) {
        BinarySearchTree tree = new BinarySearchTree();
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        tree.insert(5);
        // tree.insert(17);
        // tree.insert(25);
        // Node foundNode = tree.search(tree.root, 50);
        System.out.println("Min:" + tree.findMin(tree.root));
        System.out.println("Max:" + tree.findMax(tree.root));
        System.out.println("Height:" + tree.findHeight(tree.root));
        tree.levelOrder(tree.root);
        tree.delete(tree.root, 4);
        System.out.println("Preorder");
        tree.preOrder(tree.root);
        System.out.println(tree.isBinarySearchTree(tree.root));
        System.out.println("done");
    }
}
