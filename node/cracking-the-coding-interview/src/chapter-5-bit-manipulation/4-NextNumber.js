const NextNumber = (n) => {
  // compute c0 and c1
  let c = n;
  let c0 = 0;
  let c1 = 0;

  // check if last number is 0 while c > 0
  while((c & 1) === 0 && (c !==0)) {
    // increment c0
    c0++;
    // move to next last digit
    c >>= 1;
  }

  while((c & 1) === 1) {
    // increment c0
    c1++;
    // move to next last digit
    c >>= 1;
  }

  // Error for limits
  if(c0 + c1 === 31 || c0 + c1 === 0){
    return -1;
  }

  // position of right most trailing zero
  let p = c0 + c1;

  // Flip rightmost non-trailing zero
  n = n | (1 << p)
  //Clear all bits to the right of p
  let a = 1 << p;
  let b = a - 1;
  let mask = ~b;
  n = n & mask;

  // insert c1-1 ones on the right
  a = 1 << (c1 -1);
  b = a -1;
  n = n | b;

  return n
};

module.exports = NextNumber;