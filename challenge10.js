// Given the array below, write a function that will calculate the sum of the elements in the first half of the array.
// If the sum is greater than a number arbitrarily chosen, write another function that will rotate the array.
// myArray = [5,71,17,9,8,31,23,34,4,5,6,7,8,9,0,1,23,35,81,98,99,67,66,68,73,72,6];
// for example, if we pick our number to be 10
// we start calculating the sum: 5+71+17... it's going to be greater than 10
// we then rotate the array, so in the end will be like this:
// myArray = [6,72,73,68,66,...8,9,17,71,5];
//determine first half of array: array.length/2
//add all numbers in forst half of array: total = array[i]+total

 myArray = [5,71,17,9,8,31,23,34,4,5,6,7,8,9,0,1,23,35,81,98,99,67,66,68,73,72,6];
function addHalf(array){
  total = 0;
  for(var i = 0; i < array.length/2; i++){
    total = array[i]+total;
  }
  return total;
};
console.log(addHalf(myArray));

function lowerThan(arbNumber){
  switchArray = [];
  if( arbNumber <= total){
    return true;
  } else {
    for (var i = 0; i <= myArray.length; i++) {
       switchArray[i] = myArray[myArray.length - 1 - i];
    };
}
console.log(switchArray);
}
lowerThan(200);
