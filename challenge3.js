/*
Challenge 3:
Given an array of 30 numbers (1 to 30), swap the values of the first five and last five elements:
Array=[1,2,3,4,5,6,...,24,25,26,27,28,29,30];

the result should look like this:
newArray=[30,29,28,27,26,6,7,8,9...,24,25,5,4,3,2,1];
you're not allowed to use push/pop/shift/unshift..

hints: for loops
would love to see some brainstorming of the algorithm/pseudo code on this channel

NewArray[0] = Array[29]
NewArray[1] = Array[28]
NewArray[2] = Array[27]
there is a connection between 0 and 29, 1 and 28, 2 and 27 and so on
if you think of 0,1,2... as the "i" in a for loop
*/
/*  pseudo code:
for array elements 0-4, replace with array elements 25-29
for array elements 25-29, replace with array elements 0-4
switch array elements  0-4 and 25-29
// for array[0,1,2,3,4] return array[25,26,27,28,29]
// for array[25,26,27,28,29] return array[0,1,2,3,4]
*/
//create array
var array = []
for (var i = 1; i <= 30; i++){
  array.push(i);
};
console.log(array);

// var array1 = array[0,1,2,3,4]
// var array2 = array[25,26,27,28,29]
//
// for( var i = array[0]; i < 5; i++){
//   for( var y = array[29]; y > 20; y-2){
//     }
//   console.log(array[i+y]);
// }

// for array at index i [0] return array at index[29] i+29; 30-1-i
// for array at index[1] return array at index[28] i+27; 30-1-i
// for array at index[2] return array at index[27] i+25; 30-1-i
// for array at index[3] return array at index[26] i+23; 30-1-i
// for array at index[4] return array at index[25] i+21; 30-1-i
// for array at index[29] return array at index[0] i-29; 30-(i+1)
// for array at index[28] return array at index[1] i-27; 30-(i+1)29
// for array at index[27] return array at index[2] i-25; 30-(i+1)28
// for array at index[26] return array at index[3] i-23
// for array at index[25] return array at index[4] i-21



// var NewArray = []
// NewArray[0] = array[29]
// NewArray[1] = array[28]
// NewArray[2] = array[27]
// NewArray[3] = array[26]
// NewArray[4] = array[25]

// var newArray1 = array[0];
// array[0] = array[29]
// array[29] = newArray1
//
// var newArray2 = array[1];
// array[1] = array[28]
// array[28] = newArray2

// console.log(array);
//split into 3 loops
var newArray=[];
for (var i=0; i<5; i++) {
   newArray[i] = array[array.length - 1 - i];
}
//for(var i = 0; i <5; i++) { newArray[i] = array[array.length - 1 - i] }
//the second loop would look like this
for(var i=5; i<25; i++) {
   newArray[i] = array[i];
}
for(var i = 26; i < 31; i++){
  newArray[i] = array[array.length-1-i]
}

console.log(newArray);
// and same with the third loop
// now, the formula is based on i an array.length
// because we have:
// newArray[0] = array[29]
// newArray[1] = array[28]
// ...
