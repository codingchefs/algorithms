const chai = require('chai');
const expect = chai.expect;

const { addLists } = require('../../src/LinkedLists/SumLists');
const { LinkedList } = require('../../src/LinkedLists/LinkedList');

describe("Linked List - add lists", function() {
  let ll1;
  let ll2;

  beforeEach(function() {
    ll1 = new LinkedList();
    ll2 = new LinkedList();
  });

  it("Returns `912` as sum of Linked lists for `617` and `295`", function() {
    ll1.convertArrayToLinkedList([7, 1, 6]);
    ll2.convertArrayToLinkedList([5, 9, 2]);

    const expected = new LinkedList();
    expected.convertArrayToLinkedList([2, 1, 9]);

    const res = addLists(ll1.head, ll2.head);
    expect(res).to.deep.equal(expected.head);
  });

  it("Returns `1312` as sum of Linked lists for `617` and `695`", function() {
    ll1.convertArrayToLinkedList([7, 1, 6]);
    ll2.convertArrayToLinkedList([5, 9, 6]);

    const expected = new LinkedList();
    expected.convertArrayToLinkedList([2, 1, 3, 1]);

    const res = addLists(ll1.head, ll2.head);
    expect(res).to.deep.equal(expected.head);
  });

  it("Returns `756` as sum of Linked lists for `61` and `695`", function() {
    ll1.convertArrayToLinkedList([1, 6]);
    ll2.convertArrayToLinkedList([5, 9, 6]);

    const expected = new LinkedList();
    expected.convertArrayToLinkedList([6, 5, 7]);

    const res = addLists(ll1.head, ll2.head);
    expect(res).to.deep.equal(expected.head);
  });

});
