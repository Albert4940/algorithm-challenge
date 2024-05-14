/*
Given a string licensePlate and an array of strings words, find the shortest completing word in words.

A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.


Example 1:

Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
Output: "steps"
Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
"step" contains 't' and 'p', but only contains 1 's'.
"steps" contains 't', 'p', and both 's' characters.
"stripe" is missing an 's'.
"stepple" is missing an 's'.
Since "steps" is the only word containing all the letters, that is the answer.
Example 2:

Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
Output: "pest"
Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3
*/
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    //variable 2d
    let letters = licensePlate.match(/[a-z]/ig)
    let result = []
    let lettersAndNumberOfTimes = letters.map(l => [l.toLowerCase(),letters.join("").match(new RegExp(l, "ig")).length])
   // return lettersAndNumberOfTimes
    //get all letters from license expre regu
    for(let word of words){
      const test = lettersAndNumberOfTimes.every(c => c[1] <= word.match(new RegExp(c[0],"ig"))?.length)
      if(test)
        result.push(word)
    }
    //get each letter and the number of time s and store it into a variable
    
    //search the match letter from words to licen and get the number of times also expre regu
    return result.sort((a,b) => a.length - b.length)[0]    
};
