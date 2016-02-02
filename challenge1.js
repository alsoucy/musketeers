// //psuedo code:
// create random number between 1 and 1000
// push random number into an array
// for array length less than 30 numbers, create another random number between 1-1000
// find min number in array
// find max number in the array

var randomNums =[];
function rn(min, max) {
  return Math.floor(Math.random()*(max - min + 1)) + min;
}
// if (randomNums.length < 30) {
//   randomNums.push(rn(1, 1000))};

// for(var i = 0; i <=30; i++) {
//   randomNums.push([i]);
// };
for(var i = 0; randomNums.length < 30; i++){
  randomNums.push(rn(1, 1000))
};
console.log(randomNums);

for(var i = 0; randomNums.length < 30; i++) {
  console.log(randomNums[i] + '|');
};
//when I run above in the console and then call the randomNums array it brings back the same array over and over instead of bringing a new array every time. What am I doing wrong?
Math.min(parseInt(randomNums));
Math.max(parseInt(randomNums));
//when I run the above in the console, both bring up first number in the array
var min = Math.min(...randomNums);
min;
//above works, but I'm not sure why this works and Math.min(parseInt(randomNums)) doesn't; what does '...' do?

// to iterate through the array to find smallest number;
// get the first element into a variable
// now we loop through the array (i-=1->30)
// is the current element < varMin  //we've set the varMin out of the loop and initialized it with the first element)
// if it is, the varMin = array[i] //varMin becames the current element
// if not, move to the next one

// to iterate through the array to find smallest number;
var min = randomNums[0];
for(var i = 0; i < randomNums.length; i++) {
  if( randomNums[i] < min) {
    min = randomNums[i];
  }
}
console.log(min);
// to iterate through the array to find largest number;
var max = randomNums[0];
for(var i = 0; i < randomNums.length; i++) {
  if( randomNums[i] > max) {
    max = randomNums[i];
  }
}
console.log(max);

$(document).ready(function(){
$("body").prepend("<h1>Hello</h1>");
$("h1").after("<p>I'm a paragraph</p>");
// $("h1").before($("p"));
$(".two").append("<p>I'm a paragraph too</p>");
$("div").html("I'm not 1 anymore");
});
