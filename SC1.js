/*Question 1
Write a function to determine whether or not a string is a palindrome.
example of palindromes: racecar, level
//compare first and last letter to see if they are the same
// compare second and second to last to see if they are the same
// use for loop because comparing (given word is 'racecar')
// ['r','a','c','e','c','a','r'] = array (array.length = 7)
// compare:
// pos 0 and 6
// pos 1 and 5
// pos 2 and 4
// pos 3 and 3
var p = true // set to true b/c we assume this is the case and only need one case where elements don't match to make it not a palindrome
for (var i = 0; i <= arr.length; i += 1) {      // array.length should be Math.floor(array.length/2) b/c only need to check half of array b/c  other half should be the same
 if( arr[i] !== arr[arr.length - 1 - i]){
  p = false
 }
}
 if(p === false){
 this is not a palindrome...
}
 whole thing could be wrapped in a function
*/
var string = 'racekar';
var p = true;
for( var i = 0; i < Math.floor(string.length/2); i+=1){  //use math.floor and /2 because we are starting at 0, not looking at the actual physical length starting at 1
  if(string[i] !== string[string.length - 1 - i]){
    p = false;
  }
}
if(p === true){
  console.log('This is a palindrome');
} else {
  console.log('not a palindrome');
}
