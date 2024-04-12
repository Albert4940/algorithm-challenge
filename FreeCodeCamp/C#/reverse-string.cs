using System;
using System.Collections.Generic;
namespace HelloWorld
{
  class Program
  {
  	static string ReverseString(string str)
    {
    	string[] wordArray = str.Split(" "); 
        int sizeOfWordArray = wordArray.Length;
        string[] NewWordArray = new string[sizeOfWordArray];
        int i = sizeOfWordArray - 1;
        
        foreach(var item in wordArray){
        	var word = item.ToCharArray();
            Array.Reverse(word);            
            NewWordArray[i] = new string(word);
            i--;
        }
    	return string.Join(" ",NewWordArray);
    }
    
    static void Main(string[] args)
    {
    	var result = ReverseString("Greetings from Earth");
               // foreach(var item in result){
        	 Console.WriteLine(result);    
    //}
        }
     
  }
}