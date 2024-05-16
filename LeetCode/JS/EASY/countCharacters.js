/*
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
*/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
//Refactoring break down different filter into different variable
       return  words
    .filter(w => w.split("").every(c => chars.includes(c)))
    .filter(w => w.split("").map(c => [c,w.match(new RegExp(c,"gi"))?.length || 0]).every(c => c[1] <= chars.match(new RegExp(c[0],"gi"))?.length || 0)).reduce((acc,a) => acc + a.length,0)
 };
 