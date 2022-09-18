/* One Away: There are three types of edits that can be performed on strings:
insert a character, remove a character, or replace a character. Given two strings,
write a function to check if they are one edit (or zero edits) away.
 EXAMPLE:
 pale, ple -> true
 pales, pale -> true
 pale, bale -> true
 pale, bae -> false

 Solution:
 check if both string lengths are equal -> replace
 check if both strings lengths differ by 1, then either insert or removal
 if replace -> if a second difference is found, then return false
 if insert/removal -> if a second difference is found in consecutive order, then return false
 > takesO(n) time,where n is the length of the shorter string.
 */

/**
 * if second character is found different, then return false
 */
const oneReplaceAway = (s1, s2) => {
    let diffFound = false;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (diffFound) {
                return false;
            }
            diffFound = true;
        }
    }
    return true;
};

/**
 * if a second consecutive letter is found different, then return false
 */
const oneEditInsert = (s1, s2) => {
    let index1 = 0;
    let index2 = 0;
    while (index1 < s1.length && index2 < s2.length) {
        if (s1[index1] !== s2[index2]) {
            if (index1 !== index2) {
                return false;
            }
            index2++
        } else {
            index1++;
            index2++;
        }
    }
    return true;
};

/**
 * if first string length is equal to second string length, then its replace
 * if first string length is greater than second string length by 1, then its insert
 * if first string length is less than second string length by 1, then its removal
 * @param first
 * @param second
 * @returns {boolean}
 */
const oneEditAway = (first, second) => {
    if(first.length === second.length) {
        return oneReplaceAway(first, second);
    } else if(first.length + 1 === second.length) {
        return oneEditInsert(first, second);
    } else if(first.length - 1 === second.length) {
        return oneEditInsert(second, first);
    }
    return false;
};

/**
 * both methods combined to one
 * @param first
 * @param second
 * @returns {boolean}
 */
const oneEditAway2 = (first, second) => {
    // false condition
    if (Math.abs(first.length - second.length) > 1) return false;

    // get shorter and longer string
    let s1 = first.length < second.length ? first : second;
    let s2 = first.length < second.length ? second : first;

    let index1 = 0;
    let index2 = 0;
    let foundDifference = false;

    while (index2 < s2.length && index1 < s1.length) {
        if (s1[index1] !== s2[index2]) {
            // ensure that this is the first difference found
            if (foundDifference) return false;
            foundDifference = true;
            if (s1.length === s2.length) index1++;
        } else {
            index1++; // if matching, move shorter pointer
        }
        index2++; // always move pointer for longer string
    }
    return true;
};

module.exports = oneEditAway2;

