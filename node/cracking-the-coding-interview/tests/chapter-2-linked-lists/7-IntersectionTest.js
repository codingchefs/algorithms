const chai = require('chai');
const expect = chai.expect;

const getIntersection = require('../../src/chapter-2-linked-lists/7-Intersection');
const { LinkedList } = require('../../src/chapter-2-linked-lists/LinkedList');

describe("Linked List - is there intersection?", function() {
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

  it("Returns `head` when intersection is found between linked lists 2", () => {
    ll1.convertArrayToLinkedList([4, 1, 8, 4, 5]);
    ll2.convertArrayToLinkedList([5, 0, 1, 8, 4, 5]);

    const expected = new LinkedList();
    expected.convertArrayToLinkedList([1, 8, 4, 5]);

    const res = getIntersection(ll1.head, ll2.head);
    expect(res).to.deep.equal(expected.head);
  });

  it("Returns `null` when intersection is NOT found between linked lists", () => {
    ll1.convertArrayToLinkedList([2, 6, 4]);
    ll2.convertArrayToLinkedList([1, 5]);

    const expected = undefined;

    const res = getIntersection(ll1.head, ll2.head);
    expect(res).to.deep.equal(expected);
  });

});
