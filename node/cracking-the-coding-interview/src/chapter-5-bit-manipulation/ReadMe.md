# Bit Manipulation

Theory, Examples, Resources

## AND operation of two bits
* 0 & 0 = 0
* 1 & 0 or 0 & 1 = 0
* 1 & 1 = 1

## OR operation of two bits
* 0 | 0 = 0
* 1 | 0 or 0 | 1 = 1
* 1 | 1 = 1

## Sum of two bits
* 0 + 0 = 0
* 1 + 1 = 0 + 1 carried over
* 1 + 1 + 1 = 1 + 1 carried over  
* 0 + 1 or 1 + 0 = 1

## Subtraction of two bits
* 1 - 0 = 1 
* 1 - 1 = 0  
* 10 - 1 = borrow 1 from left & the current one becomes 2 => 2 - 1 = 1
* 100 - 1 = borrow 1 from left most to left & 10 will be borrowed to the current one. => 011  

## Multiplication of two bits
* 1 * 1 = 1
* 1 * 0 or 0 * 1 = 0
* 0 * 0 = 0

## XOR of two bits
If the bits are the same, the result is 0. If the bits are different, the result is 1.
* 0 ^ 0 = 0
* 1 ^ 1 = 0
* 0 ^ 1 or 1 ^ 0 = 1

## Left shift of bits
The left-shift operator causes the bits in shift-expression to be shifted to the left by the number of positions 
specified by additive-expression. The bit positions that have been vacated by the shift operation are zero-filled.
* Example : 0010 << 2 = 1000
* note: Each shift is a multiply by 2 (unless there's overflow)

## Right shift of bits
The right-shift operator causes the bit pattern in shift-expression to be shifted to the right by the number of 
positions specified by additive-expression. For unsigned numbers, the bit positions that have been vacated by the 
shift operation are zero-filled. For signed numbers, the sign bit is used to fill the vacated bit positions. In other 
words, if the number is positive, 0 is used, and if the number is negative, 1 is used.
* Example: 0011 >> 2 = 0000
* note: Each shift is a divide by 2 with round towards negative infinity (floor).

In a logical right shift, we shift the bits and put a 0 in the most significant bit.
In an arithmetic right shift, we shift values to the right but fill in the new bits with the value of the sign bit.

## NOT operator
The NOT bitwise operation inverts bits. A 00 becomes a 11. A 11 becomes a 00.
~ 0101 = 1010
  
## Common Bit Tasks:

1.  **Get Bit**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    gatsby new gatsby-starter-markdown https://github.com/cvluca/gatsby-starter-markdown
    ```
1.  **Set Bit**

    Change only the value at bit i to 1.

    ```javascript
    const setBit = (x, position) => {       
        const mask = 1 << position;
        return x | mask;
    }
    ```

1.  **Clear Bit**

    Change only the value at bit i to 0.
    ```javascript
    const clearBit = (x, position) => {
        const mask = 1 << position;
        return x & ~mask;
    }
    ```

1.  **Update Bit**
    
    Update the value at bit i to the given value.
    ```javascript
    const updateBit = (x, position, state) => {
        const mask = 1 << position;
        return (x & ~mask) | (-state & mask);
    }
    ```

# Tips & Tricks
* x * 4 = x << 2
* x ^ (~x) = 1
* x ^ 0s = x
* x & 0s = 0
* x | 0s = x
* x ^ 1s = ~x
* x & 1s = x
* x | 1s = 1s
* x ^ x = 0
* x & x = x
* x | x = x
* To get a negative number, we invert the bits in the positive representation and then add 1
  example: 7 -> 0 111 , -7 -> 1 001
* Check if even: (x & 1) == 0
* Check if power of two: (x & x-1) == 0