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

for(var i = 0; randomNums.length < 30; i++) {
  console.log(randomNums[i] + '|');
};

//when I run above in the console and then call the randomNums array it brings back the same array over and over instead of bringing a new array every time. What am I doing wrong?
Math.min.apply(Math.(parseInt(randomNums[])));
Math.max(parseInt(randomNums));
//when I run the above in the console, both bring up first number in the array
