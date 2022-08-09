const chai = require('chai');
const expect = chai.expect;

const { partition } = require('../../src/LinkedLists/Partition');
const LinkedList = require('../../src/LinkedLists/LinkedList');

describe.skip("Linked List - Partition", function() {
  let ll;

  beforeEach(function() {
    ll = new LinkedList();
    ll.push(3);
    ll.push(5);
    ll.push(8);
    ll.push(5);
    ll.push(10);
    ll.push(2);
    ll.push(1);
  });

  it("Returns partitioned Linkedlist when partitioned by `5`", function() {
    const res = partition(ll.head, 5);
    const expected = new LinkedList();
    expected.convertArrayToLinkedList([3, 2, 1, 5, 8, 5, 10]);
    expect(res).to.deep.equal(expected.head);
  });

});
