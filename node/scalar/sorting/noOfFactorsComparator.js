const factor = (x) => {
  return Array
    .from(Array(x + 1), (_, i) => i)
    .filter(i => x % i === 0).length;
};

const getNoOfFactorsComparator = (a, b) => {
  let f1 = factor(a)
  let f2 = factor(b)
  return ((f1 > f2) || (f1 === f2 && a < b)) ? 1: -1;
};

const arr = [9, 3, 4, 8, 16, 37, 6, 13, 15];
// const arr = [9, 3, 4];
const sortedArray = arr.sort(getNoOfFactorsComparator);
console.log(sortedArray)

// TODO wrong answer
// correct answer: 3, 13, 37, 4, 9, 6, 8, 15, 16