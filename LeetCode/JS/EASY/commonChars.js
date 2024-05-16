/*
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result = []
    let firstWord = words[0]
    let newWords = words.slice(1)
    
    for(let i = 0; i < firstWord.length; i++){
      const c = firstWord[i]
      let test = false
      
      //check if the current char exist in result and get the  number of times is it
      const numberOfTimes = result.join("").match(new RegExp(c,"gi"))?.length || 0

      /*
        if yes, checkif the res of words have the current char and his number is greater than the number of result,
        plus 1, because the rest word must have greater than 
        result = ['c','o'], c= 'o' so  numberOfTimes = 1, when i need to so the 
        numberOfTimes + 1 because, the numberOfTimes in my result and 1 = my current 'o' in my c variable equal finally to 2,
        the rest of word must have greater than numberOfTimes + 1 = 2
       */
      if(numberOfTimes > 0)
        test = newWords.every(w => w.match(new RegExp(c,"gi"))?.length >= (numberOfTimes + 1))
      else
        test = newWords.every(w => w.includes(c))
      
      if(test) result.push(c)
    }
    return result
};

console.log(commonChars(["coool","loock","cook"]))