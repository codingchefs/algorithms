/**
 * n - 1 returns except that n's initial 0s will be 1s in n-1 and
 * n's least significant 1 will be a 0 in n -1.
 * The value n is therefore a power of two
 *
 * @returns {boolean}
 * @constructor
 */
const Debugger = (n) => {
  const result = ((n & (n - 1)) === 0);
  return result;
};

module.exports = Debugger;