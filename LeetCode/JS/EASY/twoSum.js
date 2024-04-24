/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //order the array
    //check if all elements is equal to target
    //loop the array 
    
    //substract the frist element from the target

    //get the rest and serch it throught the rest of  array
    //note-take the first element substract it to target and check all numbers who smaller than taget  the if 

    let newArr = [...nums]   

    for(let i = 0; i< newArr.length; i++){
      let c = newArr[i]
      for(let j = i+1; j < newArr.length; j++){
        let num = newArr[j]
        if(c + num == target){
          return [i,j]
        }          
      }      
    }
    return [];
};