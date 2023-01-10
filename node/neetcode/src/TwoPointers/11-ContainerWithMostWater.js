/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of
 * the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 * Time complexity: O(N)
 */

/**
 *
 * @param{array<number>} heights
 * @return{number}
 * @constructor
 */
const MaxArea = (heights) => {

  let result = 0;
  let left = 0;
  let right = heights.length - 1;

  // 1, 8, 6, 2, 5, 4, 8, 3, 7
  while (left < right) {
    // calculate max area
    const area = (right - left) * Math.min(heights[right], heights[left]);
    result = Math.max(result, area);

    // move pointer for which ever height is less
    if (heights[left] >= heights[right]) {
      right--;
    } else {
      left++;
    }
  }

  return result;
};

module.exports = MaxArea;