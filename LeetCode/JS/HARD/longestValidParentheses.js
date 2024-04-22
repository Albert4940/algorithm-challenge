/*
Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
substring
.

 

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0
 */
/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function (s) {
    let count = 0;
    let left = 0;
    let right = 0;

    for (let x of s) {
        if (x === ")")
            right++;
        
        if (x === "(")
            left++;



        if (left === right)
            count = Math.max(count, left + right);

        if (right > left)
            left = right = 0;
    }

    left = right = 0;

    for(let i = s.length - 1; i >= 0; i--){
        let x = s[i];

        if(x === "(")
            left++
        
        if(x === ")")
            right++
        
        if(left === right)
            count = Math.max(count, left + right);
        
        if(left > right)
            left = right = 0;
    }

    return count;
};