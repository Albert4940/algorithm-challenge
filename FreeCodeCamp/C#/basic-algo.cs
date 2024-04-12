using System;

namespace MyApplication
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine(Factorialize(5));  
      Console.WriteLine(FindLongestWordLength("The quick brown fox jumped over the lazy dog"));
     }
     
     static int Factorialize(int num)
     {
     	if(num == 0)
        	return 1;
            
     	return Factorialize(num-1) * num;
     }

     static int FindLongestWordLength(string str)
     {
     	string[] wordArray = str.Split(" ");
        int maxLength = wordArray[0].Length;
        
        for(int i = 0; i < wordArray.Length - 1; i++)
        {
        	int wordLength = wordArray[i].Length;
            if(wordLength > maxLength)
            	maxLength = wordLength;
        }
        return maxLength;
     }

     static int[] LargestOfFour(int[,] arr)
     {
     	int[] result = new int[arr.GetLength(0)];
     	for(int i = 0; i <= arr.GetLength(0) - 1; i++)
        {
        	int maxValue = arr[i,0];
            
            for(int j = 0; j <= arr.GetLength(1) - 1; j++)
            {
            	int item = arr[i,j];
                
                if(item > maxValue)
                	maxValue = item;
            }
            
            result[i] = maxValue;
        }
        return result;
     }
     static bool ConfirmEnding(string str, string target){
        var endStr = str.Substring(str.Length - target.Length);
        return endStr == target;
     }

     static string RepeatStringNumTimes(string str, int num)
     {
        string newStr = string.Empty;

        if(num <= 0)
            return string.Empty;
        
        while(num > 0)
        {
            newStr += str;
            num--;
        }

        return newStr;
     }

     static string TruncateString(string str, int num)
     {
        string newStr = string.Empty;

        if(str.Length > num)
            return str.Substring(0,num) + "...";
        else
            return str;

     }

    //After 
     //static int FindElement(int[] arr, )

    /*
        Check if a value is classified as a boolean primitive. Return true or false.
        Boolean primitives are true and false.
    */
     static bool booWho(object boolean) {
        return boolean is bool ;
    }

    /*
        Return the provided string with the first letter of each word capitalized. 
        Make sure the rest of the word is in lower case.

        For the purpose of this exercise, you should also capitalize connecting words like the and of.
    */
    static string TitleCase(string str)
    {
        string[] strArray = str.Split(" ");

        for(int i = 0; i <= strArray.Length - 1; i++){
            string item = strArray[i];
			
            
            strArray[i] = item.Substring(0,1).ToUpper() + item.Substring(1).ToLower();
        }

        return string.Join(" ", strArray);
    }

    /*
        You are given two arrays and an index.

        Copy each element of the first array into the second array, in order.

        Begin inserting elements at index n of the second array.

        Return the resulting array. The input arrays should remain the same after the function runs.
    */

    static int[] FrankenSplice(int[] arr1, int[] arr2, int n){
        
        return null;
    }

    /*
        Remove all falsy values from an array. Return a new array; do not mutate the original array.

        Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
    */


    /*
        Return the lowest index at which a value (second argument) should be inserted into an array 
        (first argument) once it has been sorted. The returned value should be a number.

        For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

        Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] 
        and 19 is less than 20 (index 2) and greater than 5 (index 1).
    */


    /*
        Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

        For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

        The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

        Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
    */


    /*
        Write a function that splits an array (first argument) into groups the length 
        of size (second argument) and returns them as a two-dimensional array.
    */
    
    /*
        We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

        For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
    */

    /*
        Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

        Note: You can return the array with its elements in any order.
    */

    /*
        You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. 
        Remove all elements from the initial array that are of the same value as these arguments.

        JS hint: The function must accept an indeterminate number of arguments, also known as a variadic function. 
        You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
    */

    /*
        Make a function that looks through an array of objects (first argument) and 
        returns an array of all objects that have matching name and value pairs (second argument). 
        Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

        For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
        and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
        because it contains the name and its value, that was passed on as the second argument
    */
    
  }
}