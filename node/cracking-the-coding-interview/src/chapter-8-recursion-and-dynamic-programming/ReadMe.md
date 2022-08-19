# Recursion and Dynamic Programming
### Recursion
* There are many was you might divide a problem into subproblems. Three of the most common approaches to develop an 
algorithm:
  * Bottom-Up approach: start with simple case like list with only one element, then two, three and so on.
  * Top-Down approach: Divide the problem for case N into subproblems
  * Half and Half approach: divide the data set in half. example, binary search.
    
* Recursive vs Iterative solutions:
    * Recursive algorithms can be very space inefficient. algorithm recurses to depth of n, it uses at least O(n) memory

### Dynamic Programming
* Dynamic programming is mostly just a matter of taking a recursive algorithm and finding the overlapping subproblems 
  (that is, the repeated calls). You then cache those results for future recursive calls.
* The total number of nodes in the tree will represent the runtime, since each call only does 0(1) work outside of its 
  recursive calls. Therefore, the number of calls is the runtime.  