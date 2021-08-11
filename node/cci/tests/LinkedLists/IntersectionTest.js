const chai = require('chai');
const expect = chai.expect;

const { findIntersection, getIntersection } = require('../../src/LinkedLists/Intersection');
const { LinkedList, Node } = require('../../src/LinkedLists/LinkedList');

describe.skip("Linked List - is there intersection?", function() {
  let ll1;
  let ll2;

  beforeEach(function() {
    ll1 = new LinkedList();
    ll2 = new LinkedList();
  });

  it("Returns `head` when intersection is found between linked lists 1", function() {
    ll1.convertArrayToLinkedList([3, 1, 5, 9, 7, 2, 1]);
    ll2.convertArrayToLinkedList([4, 6, 7, 2, 1]);

    const expected = new LinkedList();
    expected.convertArrayToLinkedList([7, 2, 1]);

    const res = getIntersection(ll1.head, ll2.head);
    expect(res).to.deep.equal(expected.head);
  });

  it("Returns `head` when intersection is found between linked lists 2", function() {
    // ll1.convertArrayToLinkedList([4, 1, 8, 4, 5]);
    // ll2.convertArrayToLinkedList([5, 0, 1, 8, 4, 5]);

    let head1 = new Node(4);
    head1.next = new Node(1);
    head1.next.next = new Node(8);
    head1.next.next.next = new Node(4);
    head1.next.next.next.next = new Node(5);

    let head2 = new Node(5);
    head2.next = new Node(0);
    head2.next.next = new Node(1);
    head2.next.next.next = new Node(8);
    head2.next.next.next.next = new Node(4);
    head2.next.next.next.next.next = new Node(5);

    const expected = new LinkedList();
    expected.convertArrayToLinkedList([8, 4, 5]);

    const res = getIntersection(head1, head2);
    expect(res).to.deep.equal(expected.head);
  });

  it("Returns `null` when intersection is NOT found between linked lists", function() {
    ll1.convertArrayToLinkedList([2, 6, 4]);
    ll2.convertArrayToLinkedList([1, 5]);

    const expected = null;

    const res = findIntersection(ll1.head, ll2.head);
    expect(res).to.deep.equal(expected);
  });

});
