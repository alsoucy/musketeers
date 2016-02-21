//challenge 7
var unkFunc = function(str, amount) {

    if (amount < 0)
        return unkFunc(str, amount + 26);

    var output = '';

    for (var i = 0; i < str.length; i ++) {
        var c = str[i];
        if (c.match(/[a-z]/i)) {
            //checks to see if str is betw a-z not case sensitive
            //(/pattern/modifiers;)
            //i = modifies search to be case-insensitive
            var code = str.charCodeAt(i);
            //str.charCodeAt(index) - returns a numerical value from ASCII table for str[i]
            if ((code >= 65) && (code <= 90))
            //if code is betw 65 and 90 (A-Z)
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            //String.fromCharCode(65,66,67); // returns 'ABC'
            //if code is 65, amount is 6: (65-65+6)%26 = 6 + 65 = 71 or G
            else if ((code >= 97) && (code <= 122))
            //if code is betw 97 and 122(a-z)
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            //if code is 115 and amount is 8: 115-97+8 = 26%26 = 0 +97 = 97 = a
            //if code is 100 and amount is 8: 100-97+8 = 11%26 = 11+97 = 108 = l
        }
        output += c;
        //cycle thru str and return the new character for every character in the string
        //new character = ASCII code for original str at i + amount; if new number would be more than upper limit goes back to beginning of that section i.e. back to 65 or 97
    }
    return output;
};
console.log(unkFunc("aimee", 6));
//("aimee", 6) returns goskk
//aimee in ASCII = 97, 105, 109, 101, 101
//goskk in ASCII = 103, 111, 115, 107, 107
  //goskk is 6 added to the ASCII numbers for aimee

//resources
// http://www.asciitable.com/
// http://www.w3schools.com/jsref/jsref_fromCharCode.asp
        //var res = String.fromCharCode(65); will return A - ASCII code for A is 65
        //String.fromCharCode(65,66,67); // returns 'ABC'
// http://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
      //str.charCodeAt(index) - returns a numerical value from ASCII table
      //"ABC".charCodeAt(0) // returns 65
// http://www.w3schools.com/jsref/jsref_obj_regexp.asp
// http://www.w3schools.com/jsref/jsref_match.asp

//Vocabulary OverView
//charCodeAt: returns a numerical value from ASCII Table
// /[a-z]/is a pattern and i modifies the search to be case-insensitive so that if str is typed in uppercase it will still be able to match it.
//match this matches whatever is on the left side of it
//String.fromCharCode() returns a string


//challenge 8
// Write 2 functions. First function will return true if a string contains spaces and false otherwise. The second function will replace all spaces in a string with '%20' and return the new string.
// For example:
// mystr = "Why did the scientist install a knocker on his door?";
// Function 1 will return: true
// Function 2 will return: "Why%20did%20the%20scientist%20install%20a%20knocker%20on%20his%20door?"
//Hint: in the main program your code should look similar to something like this:
// var mystr = "Why did the scientist install a knocker on his door?";
// if (HasSpaces(mystr) == true) {
//     console.log(ReplaceSpaces(mystr));
// }
// else {
//     console.log("The string doesn't contain any spaces");
// }

var mystr = "Why did the scientist install a knocker on his door?";
var spaces = false;
if(mystr.indexOf(" ")> -1){
  spaces = true;
}
console.log(spaces);
