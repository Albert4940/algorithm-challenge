using System;
using System.Collections.Generic;

namespace HelloWorld
{
  class Program
  {
  
    		static string[] romanNumerals = new string[]{"M","D","C","L","X","V","I"};
static int[] arabicNumerals = new int[]{1000,500,100,50,10,5,1};
    static void Main(string[] args)
    {
Console.WriteLine(ConvertToRoman(2));
Console.WriteLine(ConvertToRoman(3));
Console.WriteLine(ConvertToRoman(4));
Console.WriteLine(ConvertToRoman(5));
Console.WriteLine(ConvertToRoman(9));
Console.WriteLine(ConvertToRoman(12));
Console.WriteLine(ConvertToRoman(16));
Console.WriteLine(ConvertToRoman(554));
Console.WriteLine(ConvertToRoman(12)); 
Console.WriteLine(ConvertToRoman(16)); 
Console.WriteLine(ConvertToRoman(29));
Console.WriteLine(ConvertToRoman(44));
Console.WriteLine(ConvertToRoman(45));
Console.WriteLine(ConvertToRoman(68));
Console.WriteLine(ConvertToRoman(83)); 
Console.WriteLine(ConvertToRoman(97));
Console.WriteLine(ConvertToRoman(99));
Console.WriteLine(ConvertToRoman(400));
Console.WriteLine(ConvertToRoman(500));
Console.WriteLine(ConvertToRoman(501));
Console.WriteLine(ConvertToRoman(649));
Console.WriteLine(ConvertToRoman(798));
Console.WriteLine(ConvertToRoman(891));
Console.WriteLine(ConvertToRoman(1000));
Console.WriteLine(ConvertToRoman(1004));
Console.WriteLine(ConvertToRoman(1006));
Console.WriteLine(ConvertToRoman(1023));
Console.WriteLine(ConvertToRoman(2014));
Console.WriteLine(ConvertToRoman(3999));
    }
    
      	static string ConvertToRoman(int num)
    {
		string response = string.Empty;
        
        if(num >= 4000)
        	return null;
        else
        response = GetTableRomanNumeral(num);
        if(response != null)
            return response;
        else
            response = GetRomanNumeral(num);

        return response;
    }
    
    
      	static string GetRomanNumeral(int num)
    {
        string result = string.Empty;
        List<int[]> brokenNumber = BreakNumber(num);
        
        for(int i = 0; i <= brokenNumber.Count - 1; i++){
            var value = brokenNumber[i][0];
            var divisor = brokenNumber[i][1];

            var RomanNumeral = GetTableRomanNumeral(value);
            if(RomanNumeral != null){
                result += RomanNumeral;
                continue;
            }

            for(int j = 0; j <= arabicNumerals.Length - 2; j++)
            {
                int maxValue = arabicNumerals[j];
                int minValue = arabicNumerals[j + 1];
                
				
                
                if(value > maxValue){
                    result += GetMultipleTableRomanNumeral(value, divisor);
                    break;
                }else if(value <= maxValue && value >= minValue){
                    if(value == (maxValue - divisor)){
                   
                        result += GetTableRomanNumeral(divisor) + GetTableRomanNumeral(maxValue);
                        break;
                    }else{
                        result += GetTableRomanNumeral(minValue) + GetMultipleTableRomanNumeral(value - minValue, divisor);
                        break;
                    }                    
                }                
            }
        }

        return result;
    }
    
    static List<int[]> BreakNumber(int num){
  List<int[]> result = new List<int[]>();
  int divisor = 1;

  while(num > 0){
    int remainder = num % 10;

    if(remainder != 0){

      result.Add(new int[]{remainder * divisor, divisor});
    }

    divisor *= 10;
    num /= 10;
  }
  
  result.Reverse();
  return result;
}

      static string GetTableRomanNumeral(int num){


 int index = Array.FindIndex(arabicNumerals, x => x == num); 
  
  return index != -1 ? romanNumerals[index] : null;
}


static string GetMultipleTableRomanNumeral(int value, int divisor){
  string result = string.Empty;
  int i = value;

  while(i > 0){
    result += GetTableRomanNumeral(divisor);
    i -= divisor;
  }

  return result;
}



  }
}