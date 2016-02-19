//challenge 7
var unkFunc = function(str, amount) {

    if (amount < 0)
        return unkFunc(str, amount + 26);

    var output = '';

    for (var i = 0; i < str.length; i ++) {
        var c = str[i];
        if (c.match(/[a-z]/i)) {
            //(/)
            var code = str.charCodeAt(i);
            if ((code >= 65) && (code <= 90))
            //65 is first letter ASCII code ie A; 90 = Z
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            else if ((code >= 97) && (code <= 122))
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
        output += c;
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
