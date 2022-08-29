/**
 * Stack of Boxes: You have a stack of n boxes, with widths w1, heights hi, and depths di. The boxes cannot be rotated
 * and can only be stacked on top of one another if each box in the stack is strictly larger than the box above it in
 * width, height, and depth. Implement a method to compute the height of the tallest possible stack. The height of a
 * stack is the sum of the heights of each box.
 * Solution: Use area of base to sort by descending order. Use longest increasing subsequence algorithm to find the
 * solution
 *
 * Time Complexity: O(n2)
 * Space Complexity: O(n) due to recursion.
 */

class Box {
  width;
  depth;
  height;

  constructor(width, depth, height) {
    this.width = width;
    this.depth = depth;
    this.height = height;
  }

  canBeAbove(b) {
    if (b == null) {
      return true;
    }
    if (this.width < b.width && this.height < b.height && this.depth < b.depth) {
      return true;
    }
    return false;
  }
}

const boxComparator = (x, y) => {
  return y.height - x.height;
};

const createStack = (boxes) => {
  boxes.sort(boxComparator);
  const stackMap = new Array(boxes.length).fill(0);
  return createStackImpl(boxes, null, 0, stackMap);
}

const createStackImpl = (boxes, bottom, offset, stackMap) => {
  // Base case
  if (offset >= boxes.length) return 0;

  /* height with this bottom*/
  const newBottom = boxes[offset];
  let heightWithBottom = 0;
  if (bottom == null || newBottom.canBeAbove(bottom)) {
    if (stackMap[offset] == 0) {
      stackMap[offset] = createStackImpl(boxes, newBottom, offset + 1, stackMap);
      stackMap[offset] += newBottom.height;
    }
    heightWithBottom = stackMap[offset];
  }

  /*without this bottom*/
  const heightWithoutBottom = createStackImpl(boxes, bottom, offset + 1, stackMap);
  /* Return better of two options. */
  return Math.max(heightWithBottom, heightWithoutBottom);
}

module.exports = {
  Box,
  createStack,
}