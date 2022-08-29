/**
 * TODO Revisit Later
 * Towers of Hanoi: In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes
 * which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom
 * (i.e., each disk sits on top of an even larger one). You have the following constraints:
 * (1) Only one disk can be moved at a time.
 * (2) A disk is slid off the top of one tower onto another tower.
 * (3) A disk cannot be placed on top of a smaller disk.
 * Write a program to move the disks from the first tower to the last using Stacks.
 * simulation: https://www.mathsisfun.com/games/towerofhanoi.html
 */

const Stack = require('../chapter-3-stacks-and-queues/Stack');
class Tower {
  disks;
  index;

  constructor(i, name) {
    this.disks = new Stack();
    this.index = i;
    this.name = name;
  }

  index() {
    return this.index;
  }

  add(d) {
    if (!this.disks.isEmpty() && this.disks.peek() <= d) {
      console.log('Error placing disk' + d);
    } else {
      this.disks.push(d);
    }
  }

  moveTopTo(t) {
    const top = this.disks.pop();
    t.add(top);
  }

  moveDisks(n, destination, buffer) {
    if (n > 0) {
      // move top n - 1 disks from origin to buffer, using destination as a buffer.
      this.moveDisks(n - 1, buffer, destination);

      // move top from origin to destination
      console.log(`moving ${this.disks.peek()} to ${destination.name}`);
      this.moveTopTo(destination);

      // move top n - 1 disks from buffer to destination, using origin as a buffer.
      buffer.moveDisks(n - 1, destination, this);
    }
  }
}

const TowersOfHanoi = (n) => {
  const towers = [];
  towers[0] = new Tower(0, 'origin');
  towers[1] = new Tower(1, 'buffer');
  towers[2] = new Tower(2, 'destination');


  for (let i = n - 1; i >= 0; i--) {
    towers[0].add(i);
  }

  towers[0].moveDisks(n, towers[2], towers[1]);

  return towers[2];
};

module.exports = TowersOfHanoi;