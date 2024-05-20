/*
You are given a string s and an integer array indices of the same length. 
The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.
*/
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) { 
    let sArr = indices.map((c,i) => [s[i],c])
    return indices.sort((a,b) => a-b).map(i => sArr.find(e => e[1] == i)[0]).join("")
};