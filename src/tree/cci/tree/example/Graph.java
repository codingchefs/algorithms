package tree.cci.tree.example;

import javax.sound.sampled.Line;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;

public class Graph {
    private int vertexes;
    private LinkedList<Integer> adj[];

    Graph(int vertexes) {
        this.vertexes = vertexes;
        adj = new LinkedList[vertexes];

        for(int i=0; i< vertexes; i++) {
            adj[i] = new LinkedList<>();
        }
    }

    public void addEdge(int src, int dest) {
        adj[src].add(dest);
    }

    public void BFS(int startingVertex) {
        // add boolean array
        boolean[] visited = new boolean[vertexes];
        // add startingVertex to Queue
        LinkedList<Integer> queue = new LinkedList<>();
        queue.add(startingVertex);
        visited[startingVertex] = true;
        while(!queue.isEmpty()) {
            // poll the element and print
            int currentEle = queue.poll();
            System.out.print(currentEle + " ");

            Iterator<Integer> i = adj[currentEle].listIterator();

            while(i.hasNext()) {
                int nextEle = i.next();
                if(!visited[nextEle]) {
                 visited[nextEle] = true;
                 queue.add(nextEle);
                }
            }
        }

    }

    private void DFSUtil(int v, boolean visited[]) {
        visited[v] = true;

        System.out.print(v + " ");

        Iterator<Integer> i = adj[v].listIterator();

        while (i.hasNext()) {
            int next = i.next();
            if(!visited[next])
            DFSUtil(next, visited);
        }
    }

    private void DFS(int startingVertex) {
        boolean [] visited = new boolean[vertexes];
        DFSUtil(startingVertex, visited);
    }

    public static void main(String[] args) {
        Graph g = new Graph(6);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        g.addEdge(1, 4);
        g.addEdge(3, 4);
        g.addEdge(3, 5);
        g.addEdge(4, 5);

        System.out.println("Following is breadth first traversal " +
        "(starting from vertex 2)");
        g.BFS(0);
        System.out.println("\nDFS:");
        g.DFS(0);
    }
}
