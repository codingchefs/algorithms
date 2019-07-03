package tree.cci;

/* Minimal Tree: Given a sorted (increasing order) array with unique integer elements,
write an algorithm to create a binary search tree with minimal height.
 */
public class MinimalTree {
    class Node {
        int data;
        Node left, right;

        Node(int data){
            this.data = data;
            left = right = null;
        }
    }

    Node createMinimalBST(int[] arr) {
        return createMinimalBST(arr, 0, arr.length -1);
    }

    Node createMinimalBST(int[] arr, int start, int end) {
        if (end < start) {
            return null;
        }
        int mid = (start + end) / 2;
        Node n = new Node(arr[mid]);

        n.left = createMinimalBST(arr, start, mid - 1);
        n.right = createMinimalBST(arr, mid + 1, end);
        return n;
    }

    public static void main(String args[]) {
        MinimalTree mt = new MinimalTree();

        int a[] = {2, 7, 4, 1, 5, 3};
        Node root = mt.createMinimalBST(a);
        System.out.println("Done!");
    }
}
