/**
 * // TODO revisit later
 * Draw Line: A monochrome screen is stored as a single array of bytes, allowing eight consecutive pixels to be stored
 * in one byte. The screen has width w, where w is divisible by 8 (that is, no byte will be split across rows). The
 * height of the screen, of course, can be derived from the length of the array and the width. Implement a function
 * that draws a horizontal line from (xl, y) to (x2, y).
 * The method signature should look something like:
 * drawLine(byte[] screen, int width, int x1, int x2, int y)
 * (31, 1), (31, 1)
 */

const DrawLine = (screen, width, x1, x2, y) => {
  let start_offset = x1 % 8;
  let first_full_byte = Math.floor(x1 / 8);

  if (start_offset !== 0) {
    first_full_byte++;
  }

  let end_offset = x2 % 8;
  let last_full_byte = Math.floor(x2 / 8);

  if (end_offset !== 7) {
    last_full_byte--;
  }

  // set full bytes
  for (let b = first_full_byte; b <= last_full_byte; b++) {
    screen[(Math.floor(width / 8)) * y + b] = 0xFF;
  }

  // create masks for start and end of line
  let start_mask = 0xFF >> start_offset;
  let end_mask = ~(0xFF >> (end_offset + 1));

  // set start and end of line
  if (Math.floor(x1 / 8) === Math.floor(x2 / 8)) { // x1 & x2 are in the same byte
    let mask = (start_mask & end_mask);
    screen[(Math.floor(width / 8) * y + Math.floor(x1 / 8))] |= mask;
  } else {
    if (start_offset !== 0) {
      let byte_number = Math.floor(width / 8) * y + first_full_byte - 1;
      screen[byte_number] |= start_mask;
    }

    if (end_offset !== 7) {
      let byte_number = Math.floor(width / 8) * y + last_full_byte + 1;
      screen[byte_number] |= end_mask;
    }
  }
  return screen;
};

module.exports = DrawLine;