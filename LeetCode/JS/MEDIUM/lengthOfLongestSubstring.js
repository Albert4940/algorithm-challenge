/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var searchSubStr = function(s){
  let tempSubStr = ""
  let result = ""

    for(let i = 0; i < s.length; i++){
      let c = s[i];        
          
      if(!tempSubStr.includes(c)){
          tempSubStr += c
      }else{
          if(tempSubStr.length > result.length)
              result = tempSubStr

          let startIndex = 0
          let loopIndex = i

          for(let y = loopIndex-1; y>= 0; y--){
            if(s[y] === c){
              startIndex = y
              break;
            }                
          }
          
          i = startIndex + 1;
          
          tempSubStr = s[i]
          //break
      }
      
  }

    if(tempSubStr.length > result.length)
      result = tempSubStr

return result;
}

var lengthOfLongestSubstring = function(s) {
  
  let result = ""    
  let count = 0
  let finalResult = ""
  let newStr = s.split("")
  
//Search from the left to right
  result = searchSubStr(newStr)

  count = result.length
finalResult = result;

  result = tempSubStr = ""

  //reverse newStr array in order to search from right to left
  

newStr = newStr.reverse()
result = searchSubStr(newStr)

if(result.length > count){
  count = result.length;
  finalResult = result;
}
    

  return count;
  //return finalResult;
};

console.log(lengthOfLongestSubstring("abcabcbb"))