const chai = require('chai');
const expect = chai.expect;

const Queue = require('../../src/chapter-3-stacks-and-queues/Queue');

describe("Queue - Test Methods", function() {

  it("tests enqueue and dequeue", function() {
    const queue = new Queue();

    expect(queue.dequeue()).to.equal('Underflow');
    expect(queue.isEmpty()).to.be.true;

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);
    queue.enqueue(60);
    queue.print();

    expect(queue.size()).to.equal(6);

    expect(queue.front()).to.equal(10);
    expect(queue.dequeue()).to.equal(10);

    expect(queue.front()).to.equal(20);
    expect(queue.dequeue()).to.equal(20);

    expect(queue.size()).to.equal(4);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front()).to.equal('No Elements in the Queue');
  });

});
