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
 whole thing should be wrapped in a function
*/
var string = 'racecar';
var p = true;
for( var i = 0; i < Math.floor(string.length/2); i+=1){
  if(string[i] !== string[string.length - i]){
    p = false;
  }
}

/*
Question 2
Given the following array, find the second highest number.
array = [7, 5, 21, 18, 3, 20];
Look at each element and compare to the rest
for loop inside a for loop
see slack for whiteboard for explanation of why i and j equal what they do...
i = 0 -> array.length - 2;  // for every iteration of i, we have to iterate through the array at j
j = i+1 -> array.length - 1;
i is one for loop, j is another for loop;
array = [7, 5, 21, 18, 3, 20];
for(var i = 0; i < arr.length -2; i++) {
 for(var j = i+1; j < arr.length - 1; i++) {
  if(a[i] > a[j]){
  var x = a[i];
    a[i] = a[j];
    a[j] = x;
}
}
}
*/




// //question 2
// array = [7, 5, 21, 18, 3, 20];
// max = array[0];
// min = array[0];
// newArr = [];
// //find second highest number
// //re-order array to be in numerical order lo to hi
// // second highest number is array.length - 2
// for( var i = 0; i < array.length; i += 1){
//   if ( array[i] > max){
//     max = array[i];
//   }
//   if ( array[i] < min) {
//     min = array[i];
//   }
// }
// console.log(max);
// console.log(min);


// Question 3 (if we have time)
// Write a program to find all prime numbers up to a given number. (example: the given number is 15, prime numbers are 2, 3, 5, 7, 11, 13)
//given a number find all prime numbers
//prime = a number greater than 1 divisible only by 1 and itself...
// do not return 1
// var m = 0;
//this function checks if a number, m is prime
function isPrime(m){
var flag = true;
for( var i = 2; i < m; i++) {
  if( m % i === 0 ) {
    flag  = false;
  }
}
return flag;
}
console.log(isPrime(77));

//now we need to find the prime numbers up to a given number
var n = 15;
for( var i = 2; i < n; i++){
  if(isPrime(i)){
    console.log(i);
  }
}
