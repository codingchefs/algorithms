const chai = require("chai");
const expect = chai.expect;
const nthToLast = require('../../src/LinkedLists/NthToLast');
const LinkedList = require('../../src/LinkedLists/LinkedList');

describe("Linked List - Return Kth to Last", function() {
  let ll;

  before(function() {
    ll = new LinkedList();
    ll.push(2);
    ll.push(1);
    ll.push(3);
    ll.push(8);
    ll.push(5);
    ll.push(6);
  });

  it("Returns 2nd element from last", function() {
    const k = 2;
    const res = nthToLast(ll.head, k);
    const expected = 5;
    expect(res.data).to.equal(expected);
  });

  it("Returns full Linked List when k is more than length of Linked list", function() {
    const k = 6;
    const res = nthToLast(ll.head, k);
    const expected = 2;
    expect(res.data).to.equal(expected);
  });

  it("Returns null when empty linked list", function() {
    const k = 2;
    const emptyLL = new LinkedList();
    const res = nthToLast(emptyLL.head, k);
    expect(res).to.equal(null);
  });

});
