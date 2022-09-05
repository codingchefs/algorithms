/**
 * Write code to remove duplicates from an unsorted linked list.
 */

/**
 * add a runner and loop through the nodes, if a duplicate node is found
 * point the next node of runner to the next next one
 * Space Complexity: O(1),
 * Time Complexity: 0(N2)
 *
 * @param head
 * @returns {*}
 */
const deleteDups = head => {

  let current = head;
  // 2 -> 1 -> 3 -> 2
  while (current) {
    let runner = current;
    while (runner.next) {
      if (runner.next.data === current.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }

    current = current.next;
  }
  return head;
};

module.exports = deleteDups;