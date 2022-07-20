const noOfdigits = (x) => {
  return Array
    .from(Array(x + 1), (_, i) => i)
    .filter(i => x % i === 0).length;
};

const getNoOfDigitsComparator = (a, b) => {
  let d1 = noOfdigits(a);
  let d2 = noOfdigits(b);
  return (d1 === d2 && a > b) ? 1: -1;
};

const arr = [93, 2, 37, 639, 8, 100, 345, 49];
const sortedArray = arr.sort(getNoOfDigitsComparator);
console.log(sortedArray)

// TODO wrong answer
// correct answer: 8, 2, 93, 49, 37, 639, 345, 100