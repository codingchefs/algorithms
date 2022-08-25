/**
 * Paint Fill: Implement the "paint fill" function that one might see on many image editing programs. That is,
 * given a screen (represented by a two-dimensional array of colors), a point, and a new color, fill in the surrounding
 * area until the color changes from the original color.
 *
 * Solution: use a recursion to visit top, bottom, left and right cells and compare if it is the current Color and
 * change it to newColot
 */
const PaintFill = (image, sr, sc, newColor) => {
  if (image[sr][sc] === newColor) return image;
  fill(image, sr, sc, image[sr][sc], newColor)
  return image;
};

const fill = (image, sr, sc, currentColor, newColor) => {
  // check bounds
  if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] !== currentColor) return;
  // set color
  image[sr][sc] = newColor;

  // traverse top row
  fill(image, sr - 1, sc, currentColor, newColor);
  // traverse bottom row
  fill(image, sr + 1, sc, currentColor, newColor);
  // traverse left col
  fill(image, sr, sc - 1, currentColor, newColor);
  // traverse right col
  fill(image, sr, sc + 1, currentColor, newColor);
};

module.exports = PaintFill;