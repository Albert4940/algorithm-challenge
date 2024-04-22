/*
    You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]

Output: [0,9]

Explanation:

The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

Output: []

Explanation:

There is no concatenated substring.

Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

Output: [6,9,12]

Explanation:

The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var getCountOfWord = function(words){
    let result = [];

    for(let item of words){
        let count = 0;
        words.forEach(x => {
            if(x == item)
                count++;
        })
        
        if(!result.find(([word,i]) => word == item))
         result.push([item,count])
    }

    return result;
}

var findCountOfWord = function(subStr,arr, wordElementLength){
  const word = arr[0]
  const count = arr[1]
  let countTest = 0
  for(let y = 0; y < subStr.length; y=y + wordElementLength){
              const item = subStr.slice(y,y+wordElementLength)
              if(item == word)
                countTest++;
          }
  
  return count == countTest;
}
//console.log(getCountOfWord(["word","good","best","word"]))
//console.log(findCountOfWord("goodgoodbestword",[ 'best', 1 ],4))
var findSubstring = function(s, words) {
   const wordsLength = words.length;
   const wordElementLength = words[0].length;
   const newWordsArr = getCountOfWord(words);

   let result = []

   for(let i = 0; i < s.length; i++){     
        const subStr = s.slice(i,i + (wordElementLength * wordsLength))

        if(subStr.length == wordElementLength * wordsLength){
          let test = true
          for(let arr of newWordsArr){
            if(!findCountOfWord(subStr,arr,wordElementLength)){
                    test = false;
                    break;
            }
            //console.log(findCountOfWord(subStr,arr,wordElementLength))
          }
          
          if(test)
              result.push(i)
        }

   }
   return result;
};