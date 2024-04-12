using System;
using System.Collections.Generic;

namespace HelloWorld
{
  class Program
  {
  
    static void Main(string[] args)
    {
 
		Console.WriteLine(Rot13("SERR PBQR PNZC"));
    }
    
    static string Rot13(string str)
{
    string result = string.Empty;
    char[] strArray = str.ToCharArray();

    for(int i = 0; i <= strArray.Length - 1; i++)
    {
        var letter = strArray[i];
        //Convert to ascii code
        int asciiCode = strArray[i];

        if(asciiCode >= 65 && asciiCode <= 90)
            result += Decrypt(asciiCode);
        else
            result += letter;
    }

    return result;
}

static char Decrypt(int asciiCode)
{
    int decryptCode = 0;
    //string decryptLetter = string.Empty;

    if(asciiCode >= 65 && asciiCode <= 77)
        decryptCode = asciiCode + 13;
    
    if(asciiCode > 77 && asciiCode <= 90)
        decryptCode = asciiCode - 13;

    //get char from ascii code and return it
    return Convert.ToChar(decryptCode);
}

  }
}