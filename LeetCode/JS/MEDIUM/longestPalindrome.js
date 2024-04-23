/*
    Given a string s, return the longest 
    palindromic
    
    substring
    in s.

    

    Example 1:

    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.
    Example 2:

    Input: s = "cbbd"
    Output: "bb"
 
*/
var longestPalindrome = function(s) {
    if (s.length < 1) return "";
    
    let start = 0;
    let end = 0;
    
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);      // Odd-length palindromes (centered at s[i])
        let len2 = expandAroundCenter(s, i, i + 1);  // Even-length palindromes (centered between s[i] and s[i+1])
        
        let maxLen = Math.max(len1, len2);
        
        if (maxLen > end - start + 1) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }
    
    return s.substring(start, end + 1);
};

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}
//version 1
/*
    var longestPalindrome = function(s) {
  let result = ""
  let tempSubStr = ""

 if(s.length <= 1)
    return s
    
    for(let i = 0; i < s.length; i++){      
      tempSubStr += s[i] 
      for(let y = i+1; y < s.length; y++){
        tempSubStr += s[y]

        if(tempSubStr == tempSubStr.split("").reverse().join(""))
        {
          if(tempSubStr.length > result.length)
            result = tempSubStr

          /*tempSubStr = ""
          break;*/
       /* }
        
    }
tempSubStr = ""
  }
  //console.log()
      if(result == "")
    result = s[0]
  return result
};
*/

