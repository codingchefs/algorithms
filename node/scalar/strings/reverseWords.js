/**
 * Problem Description *
 You are given a string A of size N.

 Return the string A after reversing the string word by word.

 NOTE:
 A sequence of non-space characters constitutes a word.
 Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
 If there are multiple spaces between words, reduce them to a single space in the reversed string.

 str = ' the sky is blue';
 */
const reverseWord = (str) => {
  let result = '';
  let i = 0;
  const n = str.length;

  while (i < n) {
    while (i < n && str[i] === ' ') i++;
    if (i >= n) break;
    let j = i + 1;
    while (j < n && str[j] !== ' ') j++;
    const sub = str.substring(i, j);
    if (!result) result = sub;
    else result = sub + ' ' + result;
    i = j + 1;
  }

  return result;
};

const a = ' the sky is blue';
console.log(reverseWord(a));

