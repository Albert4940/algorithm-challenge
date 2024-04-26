/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = ""
    
    //sort array by length of str element ascendant
    strs = strs.sort((a,b) => a.length - b.length);
  
    //get the frist str in order to search
    let firstStr = strs[0]

    //loop throught first str of array
    for(let i = 0; i < firstStr.length; i++){
      let char = firstStr[i]
      let test = true

      //loop thorught the array without the first element : j = 1
      for(let j = 1; j < strs.length; j++){
        //get current str
        let current = strs[j];  
        
        //test if the char of the first element of array equal to the char of current str
        if(char == current[i])  
          test = true
        else{
          test = false;
           break;
        }       
      }    
      if(test)
        result += char 
      //if false exit the function by returning the result 
      if(!test) return result 
    }
    return result
};