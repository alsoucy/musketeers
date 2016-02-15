// Question 2
// Given the following array, find the second highest number.
// array = [7, 5, 21, 18, 3, 20];
// Look at each element and compare to the rest
// for loop inside a for loop
// see slack for whiteboard for explanation of why i and j equal what they do...
// i = 0 -> array.length - 2;  // for every iteration of i, we have to iterate through the array at j
// j = i+1 -> array.length - 1;
// i is one for loop, j is another for loop;
arr = [7, 5, 21, 18, 3, 20];
console.log(arr);
for(var i = 0; i <= arr.length -2; i++) {
 for(var j = i+1; j <= arr.length - 1; j++) {
  if(arr[i] > arr[j]){
  var x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
}
}
}
console.log(arr);
// find second highest number
//given array display only the values at the even positions
array = [7, 5, 21, 18, 3, 20];
for(var i = 0; i < array.length; i++){
  if(i % 2 === 0){
    console.log(array[i]);
  }
}

// given the array, display the even values
arr1 = [7, 5, 21, 18, 3, 20];
for (var i = 0; i < arr1.length; i++){
  if(arr1[i] % 2 === 0){
    console.log(arr1[i]);
  }
}
