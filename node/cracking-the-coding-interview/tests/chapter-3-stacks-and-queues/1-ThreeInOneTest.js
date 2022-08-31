const chai = require('chai');
const expect = chai.expect;

const FixedMultiStack = require('../../src/chapter-3-stacks-and-queues/1-ThreeInOne');

describe("Stack - Three in One", () => {

  it("tests push and pop", function() {
    const stack = new FixedMultiStack(3);

    expect(stack.pop(0)).to.equal('EmptyStackException');
    expect(stack.pop(1)).to.equal('EmptyStackException');
    expect(stack.pop(2)).to.equal('EmptyStackException');
    expect(stack.isEmpty(0)).to.be.true;
    expect(stack.isEmpty(1)).to.be.true;
    expect(stack.isEmpty(2)).to.be.true;

    stack.push(0, 10);
    stack.push(0, 20);
    stack.push(0, 25);
    stack.push(1, 30);
    stack.push(1, 40);
    stack.push(1, 45);
    stack.push(2, 50);
    stack.push(2, 60);
    stack.push(2, 65);

    expect(stack.size(0)).to.equal(3);
    expect(stack.size(1)).to.equal(3);
    expect(stack.size(2)).to.equal(3);

    expect(stack.peek(0)).to.equal(25);
    expect(stack.peek(1)).to.equal(45);
    expect(stack.peek(2)).to.equal(65);

    expect(stack.push(0, 30)).to.equal('FullStackException');
    expect(stack.push(1, 50)).to.equal('FullStackException');
    expect(stack.push(2, 70)).to.equal('FullStackException');

    expect(stack.pop(0)).to.equal(25);
    expect(stack.pop(1)).to.equal(45);
    expect(stack.pop(2)).to.equal(65);

    expect(stack.peek(0)).to.equal(20);
    expect(stack.peek(1)).to.equal(40);
    expect(stack.peek(2)).to.equal(60);

    expect(stack.pop(0)).to.equal(20);
    expect(stack.pop(1)).to.equal(40);
    expect(stack.pop(2)).to.equal(60);

    expect(stack.peek(0)).to.equal(10);
    expect(stack.peek(1)).to.equal(30);
    expect(stack.peek(2)).to.equal(50);

    expect(stack.pop(0)).to.equal(10);
    expect(stack.pop(1)).to.equal(30);
    expect(stack.pop(2)).to.equal(50);

    expect(stack.size(0)).to.equal(0);
    expect(stack.size(1)).to.equal(0);
    expect(stack.size(2)).to.equal(0);

    expect(stack.pop(0)).to.equal('EmptyStackException');
    expect(stack.pop(1)).to.equal('EmptyStackException');
    expect(stack.pop(2)).to.equal('EmptyStackException');

    expect(stack.peek(0)).to.equal('EmptyStackException');
    expect(stack.peek(1)).to.equal('EmptyStackException');
    expect(stack.peek(2)).to.equal('EmptyStackException');
  });

});
