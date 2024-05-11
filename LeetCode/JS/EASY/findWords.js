/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:

Input: words = ["omk"]
Output: []
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
 
*/
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const keyboards = ["qwertyuiop","asdfghjkl","zxcvbnm"]
    let result = []

    for(let word of words){
      let test = true;
      /*for(let char of word){
        if(keyboards.some(key => key.includes(char)))
      }*/
      for(let key of keyboards){
        if(word.toLowerCase().split("").every(char => key.includes(char)))
          result.push(word)
      }

    }
    return result
};