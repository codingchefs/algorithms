/**
 * Paint Fill: Implement the "paint fill" function that one might see on many image editing programs. That is,
 * given a screen (represented by a two-dimensional array of colors), a point, and a new color, fill in the surrounding
 * area until the color changes from the original color.
 */
const PaintFill = (image, sr, sc, newColor) => {
  if (image[sr][sc] === newColor) return image;
  fill(image, sr, sc, image[sr][sc], newColor);
  return image;
};

const fill = (image, sr, sc, color, newColor) => {
  // check bounds
  if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] !== color) {
    return;
  }

  image[sr][sc] = newColor;
  // row before
  fill(image, sr - 1, sc, color, newColor);
  // row after
  fill(image, sr + 1, sc, color, newColor);
  // left
  fill(image, sr, sc - 1, color, newColor);
  // right
  fill(image, sr, sc + 1, color, newColor);
};

module.exports = PaintFill;