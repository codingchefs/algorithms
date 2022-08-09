const {LinkedList} = require('./LinkedList');

const mergeTwoLists = (a, b) => {
  // create a dummy list node
  let dummy = new LinkedList(0);
  let current = dummy;

  while (a != null && b != null) {
    if (a.data > b.data) {
      current.next = b;
      b = b.next;
    } else {
      current.next = a;
      a = a.next;
    }
    current = current.next;
  }

  // merge remaining elements
  current.next = a || b;
  return dummy.next;
};

const MergeKSortedList = (lists) => {
  // null check
  if (lists.length === 0) return null;

  // loop while lists length is greater than 1
  while (lists.length > 1) {
    const a = lists.shift();
    const b = lists.shift();
    // merge two lists
    const mergedAB = mergeTwoLists(a, b);
    lists.push(mergedAB);
  }

  return lists[0];
};

module.exports = MergeKSortedList;