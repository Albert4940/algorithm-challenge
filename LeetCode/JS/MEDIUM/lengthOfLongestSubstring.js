/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = ""
    let tempSubStr = ""
    let count = 0
  	let finalResult = ""
  
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
  
  	count = result.length
	finalResult = result;
  
  	result = tempSubStr = ""
  	
      for(let i = s.length - 1; i >= 0; i--){
        let c = s[i];
        
        if(!tempSubStr.includes(c)){
            tempSubStr += c
        }else{
            if(tempSubStr.length > result.length)
                result = tempSubStr

                let startIndex = 0
                let loopIndex = i

                for(let y = loopIndex+1; y< s.length; y++){
                  if(s[y] === c){
                    startIndex = y
                    break;
                  }                
                }
                i = startIndex - 1;            
                tempSubStr = s[i]
        }
        
    }
  
    if(tempSubStr.length > result.length)
        result = tempSubStr
  
  if(result.length > count){
    count = result.length;
    finalResult = result;
  }
    	
  
    return count;
    //return finalResult;
};

console.log(lengthOfLongestSubstring("bbbbb"));