/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1- Open brackets must be closed by the same type of brackets.
2- Open brackets must be closed in the correct order.
3- Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    //initialize stack to store the closing brockets expected...
    let stack = [];

    //loop throught each character in input string..
     for(let char of s){
        //If open character are present, push the closing character to stack...
        if(char == "{")
            stack.push("}")        
        else if(char == "[")
            stack.push("]")
        else if(char == "(")
            stack.push(")")
        //If a close bracket is found, check that it matches the last stored open bracket
        else if(stack.pop() !== char)
            return false
     }
    
    return !stack.length;
};