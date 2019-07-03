package tree.cci;

import java.util.ArrayList;
import java.util.LinkedList;

/* List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth
(e.g., if you have a tree with depth D, you'll have Dlinked lists).
 */
public class ListOfDepths {

    class Node {
        int data;
        Node root;
        Node(int data) {
            this.data= data;
            root = null;
        }
    }
    void createLevelLinkedList(Node root, ArrayList<LinkedList<Node>> lists, int level) {

    }

    ArrayList<LinkedList<Node>> createLevelLinkedList(Node root) {
        return null;
    }
}
