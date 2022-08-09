/*
String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another.
Given two strings, S1 and S2, write code to check if S2 is a rotation of S1 using only one call to
isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").
Complexity: O(N) if isSubstring runs O(A+B)

Solution:
    check if s2 is a substring of s1s1
 */
const isRotation = (s1, s2) => {
    let len = s1.length;
    if(len === s2.length && len > 0) {
        const s1s1 = s1 + s1;
        return s1s1.includes(s2);
    }
    return false;
};

console.log(isRotation('waterbottle', 'erbottlewat'));
