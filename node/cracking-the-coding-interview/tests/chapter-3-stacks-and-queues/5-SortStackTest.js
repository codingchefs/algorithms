const chai = require('chai');
const expect = chai.expect;

const SortStack = require('../../src/chapter-3-stacks-and-queues/5-SortStack');
const Stack = require('../../src/chapter-3-stacks-and-queues/Stack');

describe("Stack - SortStack", () => {

  it("tests push and pop", function () {
    const stack = new Stack();

    stack.push(1);
    stack.push(3);
    stack.push(8);
    stack.push(12);
    expect(stack.peek()).to.equal(12);
    stack.push(5);
    SortStack(stack);
    expect(stack.peek()).to.equal(12);
    stack.push(10);
    SortStack(stack);
    expect(stack.peek()).to.equal(12);
    stack.push(14);
    SortStack(stack);
    expect(stack.peek()).to.equal(14);
  });

});
