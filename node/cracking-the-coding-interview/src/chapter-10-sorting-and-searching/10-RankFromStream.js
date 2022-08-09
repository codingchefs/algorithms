/**
 * TODO revisit later
 * Rank from Stream: Imagine you are reading in a stream of integers. Periodically, you wish to be able to look up the
 * rank of a number x (the number of values less than or equal to x). Implement the data structures and algorithms to
 * support these operations. That is, implement the method track(int x), which is called when each number is generated,
 * and the method getRankOfNumber(int x), which returns the number of values less than or equal to x(not including x
 * itself).
 * Solution:
 * Instead of inserting elements into an array, we insert elements into a binary search tree. The method track(int x)
 * will run in O(log n) time, where n is the size of the tree (provided, of course, that the tree is balanced).
 * To find the rank of a number, we could do an in-order traversal, keeping a counter as we traverse.
 *
 * Time complexity:
 * The track method and the getRankOfNumber method will both operate in O(log N)on a balanced
 * tree and O(N) on an unbalanced tree.
 */
class RankNode {

  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    // new variable to track left tree size
    this.left_size = 0;
  }

  insert(element) {
    // if element is less than data
    if (element <= this.data) {
      // if left exists
      if (this.left) {
        // recurse insert on left node
        this.left.insert(element);
      } else {
        // if no left, include element as left node
        this.left = new RankNode(element);
      }
      // increment left size
      this.left_size++;
    } else {
      // if right exists
      if (this.right) {
        this.right.insert(element);
      } else {
        this.right = new RankNode(element);
      }
    }
  }

  getRank(element) {
    // element is equal to head, return left size
    if (element === this.data) {
      return this.left_size;
      // if element is less than head
    } else if (element < this.data) {
      // if left is null, return -1
      if (!this.left)
        return -1;
      else
        // if left exists, recursively get rank of left
        return this.left.getRank(element);
    } else {
      // if element is greater than head
      let right_rank = !this.right ? -1 : this.right.getRank(element);
      if (right_rank === -1)
        return -1;
      else
        return this.left_size + 1 + right_rank;
    }
  }
}

module.exports = RankNode;