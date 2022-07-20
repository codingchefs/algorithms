function largestSum(arr, n) {
  const T = [];
  T[0] = 0;
  for (let i = 1; i < n; i++) {
    T[i] = arr[i] + Math.max(0, T[i - 1]);
  }
  let max = 0;
  for(let i =0; i < T.length; i++) {
    max = Math.max(T[i],  max);
  }
  return max;
}
// Driver Code
var arr = [5, 15, -30, 10, -5, 40, 10];
var n = arr.length;
console.log('Largest sum = ' + largestSum(arr, n));