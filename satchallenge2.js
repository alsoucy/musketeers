// 1. Given the results of a series of heads/tails coin tosses as a boolean[] array (true=heads, false=tails), figure out if there were ever 10 heads in a row
//if 10 trues in a row, return true
//else return false
//mine
// var boolArray = [true, false, false, true, false, true];
// for(var i = 0; i < boolArray.length; i++){
//   if(boolArray[i] === true && boolArray[i+1] === true && boolArray[i + 2]=== true){
//     console.log("there are at least three trues in a row");
//   }
// }
//sat work
//
var boolArray = ['t','f','t','t','t','t','f','t','t','t','t','t'];
var numberInRow = 4;
function heads(){
  var counter = 0;
for(var i = 0; i < boolArray.length-numberInRow; i++){
  for(var j = i; j< boolArray.length; j++){
    if(boolArray[j] === 't'){
      counter++;
    } else {
      counter = 0;
    }
if(counter === numberInRow){
  return true;
}
  // return false; if leave 'return false' here will return false and exit the first time the counter isn't the same number as numberInRow so need to move after all loops but still inside the function
}
}
return false;
}
console.log(heads());

//Another method...
function heads2(){
var counter = 0;
for(var i = 0; boolArray.length - numberInRow; i++){
  for(var j = i; j < i + numberInRow; j++){
    if(boolArray[i]===boolArray[j] && boolArray[i]==='t'){
      counter++
    } else {
      counter = 0;
    }
  if(counter === numberInRow){
    return true;
  }
  }
  }
  return false;
}
console.log(heads2());
//
// 2. Given an unsorted (if array is sorted it's easier b/c can use only 1 for loop using i < i+1 < i+2) array return whether an increasing subsequence of length 3 exists or not in the array.
// The function should return true if there exists i, j, k such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
//numbers don't have to be in sequence, just be sequential!
//
// Example:
// Given [1, 2, 3, 4, 5],
// return true.
//
// Given [5, 4, 3, 2, 1],
// return false
var a = [7,3,2,1,4,8];
function seq(){
  for(var i = 0; i < a.length-2; i++ ){
    for(var j = i+1; j < a.length -1; j++){
      for( var k = j+1; k < a.length; k++){
        if(a[i] < a[j] && a[j]< a[k]){  //if can only compare 2 at a time so need to use && to compare 3 elements
          console.log(a[i]+', '+ a[j]+ ', ' + a[k]);
          return true;
        }
      }
    }
  }
  return false;
}
console.log(seq());

//another method is to sort array first
var temp = 0;
for (var i = 0; i < a.length-2; i++){
  for(var j = i+1; j < a.length -1; j++){  //j needs to be in relation to i
    if(a[i] > a[j]){
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}
console.log(a);
//then use for loop to see if matches the condition if 0<i<j<k
origArray=[5,4,7,9,2,1]
function resortArray(n){
  var temp = 0;
  for (var i = 0; i < n.length-1; i++){
    for(var j = i+1; j < n.length; j++){  //j needs to be in relation to i
      temp = n[i];
      if(n[i] > n[j]){
        n[i] = n[j];
        n[j] = temp;
}
}
} return n
}
console.log(resortArray(origArray));

function inSeq(array){
for(var i = 0; i < array.length - 2; i++) {
  if(array[i] < array[i+1] && array[i+1]< array[i+2]){
    return true;
  }
}
return false;
}
console.log(inSeq(origArray));
//try to combine sorting and inSeq functions?
var testArray = [9,5,3,6,7,1];
// console.log(resortArray(testArray)); //1,3,5,6,7,9
console.log(inSeq(testArray));
// 3. Given a string which contains only lowercase letters, remove duplicate letters so that every letter appears once and only once.
// You must make sure your result is arranged in alphabetical order.
//
// Example:
// Given "bcabc"
// Return "abc"
// ascii codes for lowercase letters: 97-122
// var string = ''
// for (var i = 0; i < string.length; i++){
//   if(string[i] = string[i]){
//
//   }
// }
//
// 4. Interview question from Amazon:
// Determine if a list of integers forms an arithmetic sequence. For instance, the integers 1, 2, 3, 4, 5 form an arithmetic sequence because the differences between them are all the same, but the integers 1, 2, 4,8, 16 do not form an arithmetic sequence because the differences between them are not all the same. The input need not be sorted, so the integers 3, 2, 5, 1, 4 also form an arithmetic sequence.
// Your task is to write a function that determines if a list of integers forms an arithmetic sequence.
