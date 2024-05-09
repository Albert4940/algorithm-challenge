/*
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.
Example 1:

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.
Example 2:

Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
*/
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    //refactoring with dictionnary
    //create 2D array names heights
    let namesHeights = names.map((name,i) => [name,heights[i]])
    //sort heights arr
    let newHeights = [...heights]
    newHeights = newHeights.sort((a,b)=>a-b).reverse()
    //sort the new arr and return name from 2d arr that correspondes by the current height 
    let results = []
    
    for(let height of newHeights){
      results.push(namesHeights.filter(name => name[1] == height)[0][0])
    }
    return results
    //return newHeights.map(height => namesHeights.filter(name => name))
};