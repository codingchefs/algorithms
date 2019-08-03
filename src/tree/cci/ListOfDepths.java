package tree.cci;

import java.util.ArrayList;
import java.util.LinkedList;

/* List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth
(e.g., if you have a tree with depth D, you'll have Dlinked lists).
 */
public class ListOfDepths {

    void createLevelLinkedList(Node root, ArrayList<LinkedList<Node>> lists, int level) {
        if(root == null) return;

        LinkedList<Node> ll = null;
        if(lists.size() == level) {
            ll = new LinkedList<Node>();
            lists.add(ll);
        } else {
            ll = lists.get(level);
        }
        ll.add(root);
        createLevelLinkedList(root.left, lists, level + 1);
        createLevelLinkedList(root.right, lists, level + 1);
    }

    ArrayList<LinkedList<Node>> createLevelLinkedList(Node root) {
        ArrayList<LinkedList<Node>> lists = new ArrayList<LinkedList<Node>>();
        createLevelLinkedList(root, lists, 0);
        return lists;
    }

    public static void main(String[] args) {
        Node root = new Node(5);
        root.left = new Node(10);
        root.right = new Node(15);
        root.left.left = new Node(20);
        root.left.right = new Node(25);
        root.right.left = new Node(30);
        root.right.right = new Node(35);
        ListOfDepths ld = new ListOfDepths();
        ArrayList<LinkedList<Node>> lists = ld.createLevelLinkedList(root);
        System.out.println("Done!");
    }
}

