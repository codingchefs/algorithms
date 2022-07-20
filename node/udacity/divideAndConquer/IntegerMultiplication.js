const multiply = (x, y) => {
  const n = Math.max(x.length, y.length);
  if (n === 1) return x*y;

  const X = x.charCodeAt(0) & 0xFF;
  const Y = y.charCodeAt(0) & 0xFF;
  const xL = X & 0xF;
  const xR = X >> 4;
  const yL = Y & 0xF;
  const yR = Y >> 4;

  const P1 = multiply(xL, yL);
  const P2 = multiply(xR, yR);
  const P3 = multiply(xL + xR, yL + yR);
  return P1 * 2^n + (P3-P1-P2) * 2^(n/2) + P2;
};

const x = 10011011
const y = 10111010

console.log(multiply(x, y));
