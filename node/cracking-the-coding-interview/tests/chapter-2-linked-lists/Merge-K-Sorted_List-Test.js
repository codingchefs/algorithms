const chai = require('chai');
const expect = chai.expect;

const MergeKSortedList = require('../../src/chapter-2-linked-lists/Merge-K-Sorted-Lists');
const { LinkedList } = require('../../src/chapter-2-linked-lists/LinkedList');

describe("Linked List - Merge K Sorted List", () => {

  it("Merge 3 sorted lists", function() {
    const ll1 = new LinkedList();
    ll1.push(1);
    ll1.push(4);
    ll1.push(5);
    const ll2 = new LinkedList();
    ll2.push(1);
    ll2.push(3);
    ll2.push(4);
    const ll3 = new LinkedList();
    ll3.push(2);
    ll3.push(6);

    const list = [ll1.head, ll2.head, ll3.head];
    const res = MergeKSortedList(list);
    const expected = new LinkedList();
    expected.convertArrayToLinkedList([1, 1, 2, 3, 4, 4, 5, 6]);
    expect(res).to.deep.equal(expected.head);
  });

});