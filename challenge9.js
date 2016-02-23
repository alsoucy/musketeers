// Given the following array, write a function that will search for a number n (given as parameter) to see if it's in array.
// The function should return true if the element is in the array, false otherwise.
// myarray = [5,71,17,9,8,31,23,34,4,5,6,7,8,9,0,1,23,35,81,98,99,67,66,68,73,72,6];
// If the element is in the array, write a function that will return true if there is another element greater than the number n (given again as a parameter) or false otherwise.
// for example if we have n = 71
// function search(n) will return true
// function isnotmax(n) will return true
// if n=99
// function search(n) will return true
// function isnotmax(n) will return false
myarray = [5,71,17,9,8,31,23,34,4,5,6,7,8,9,0,1,23,35,81,98,99,67,66,68,73,72,6];
function hasNumber(n){
  for(var i = 0; i < myarray.length; i++){
    if(myarray[i]===n){
      return true;
    }
  }
  return false;
}
// console.log(hasNumber(9));

function isNotMax(n) {
 for( var i = 0; i < myarray.length; i++){
   if(myarray[i] > n){
     return true;
   }
 }
 return false;
}
console.log(hasNumber(87));
console.log(isNotMax(87));
