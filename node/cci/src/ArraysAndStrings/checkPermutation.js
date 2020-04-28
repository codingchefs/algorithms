/** Check Permutation: Given two strings, write a method to decide
 * if one is a permutation of the other.
 * assumptions: Its case sensitive, whitespace is significant
 * Solution: Strings of different lengths cannot be permutations of each other.
 */
const checkPermutation = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    // sort both and compare
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    return str1 === str2;
};

const checkPermutation2 = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const map = {};
    for (let i = 0; i < str1.length; i++) {
        let str = str1[i];
        if (map[str]) {
            map[str] = map[str] + 1;
        } else {
            map[str] = 1;
        }
    }

    for (let j = 0; j < str2.length; j++) {
        let str = str2[j];
        map[str] = map[str]-1;
        if(map[str] !==0 && !map[str]) {
            return false;
        }
    }
    return true;
};

console.log(checkPermutation2('mississippi', 'ppissssiimi'));
