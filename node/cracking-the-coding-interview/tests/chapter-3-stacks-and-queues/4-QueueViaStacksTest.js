const chai = require('chai');
const expect = chai.expect;

const QueueViaStacks = require('../../src/chapter-3-stacks-and-queues/4-QueueViaStacks');

describe("Stack - QueueViaStacks", () => {

  it("tests push and pop", function () {
    const queue = new QueueViaStacks(3);

    queue.add(1);
    queue.add(2);
    expect(queue.peek()).to.equal(1);
    queue.add(3);
    expect(queue.size()).to.equal(3);
    expect(queue.remove()).to.equal(1);
    expect(queue.peek()).to.equal(2);
    expect(queue.remove()).to.equal(2);
  });

});
