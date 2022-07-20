
const hammingWeight = (A) => {
  let count = 0;
  while (A!==0) {

    if(A%2 === 1) {
      count++;
    }
    A = A << 1;
  }

  return count;
};

console.log(hammingWeight(450676354));

