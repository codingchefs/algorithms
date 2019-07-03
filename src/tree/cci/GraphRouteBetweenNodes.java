package tree.cci;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;

/* 4.1 Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a
route between two nodes. */

public class GraphRouteBetweenNodes {
    private int vertexes;
    private LinkedList<Integer> adj[];

    GraphRouteBetweenNodes(int vertexes) {
        this.vertexes = vertexes;
        adj = new LinkedList[vertexes];

        for(int i=0; i< vertexes; i++) {
            adj[i] = new LinkedList<>();
        }
    }

    public void addEdge(int src, int dest) {
        adj[src].add(dest);
    }

    public Boolean isReachable(int src, int dest) {
        boolean[] visited = new boolean[vertexes];
        visited[src] = true;
        // add src to queue
        Queue<Integer> queue = new LinkedList<>();
        queue.add(src);

        while(!queue.isEmpty()) {
            int currentElem = queue.poll();
            Iterator<Integer> i = adj[currentElem].listIterator();

            while(i.hasNext()) {
                int nextElem = i.next();

                if(nextElem == dest) {
                    return true;
                }
                if(!visited[nextElem]) {
                    visited[nextElem] = true;
                    queue.add(nextElem);
                }
            }
        }


        return false;
    }

    public static void main(String[] args) {
        GraphRouteBetweenNodes g = new GraphRouteBetweenNodes(6);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);

        int u = 1;
        int v = 3;
        if (g.isReachable(u, v))
            System.out.println("There is a path from " + u +" to " + v);
        else
            System.out.println("There is no path from " + u +" to " + v);
    }
}
