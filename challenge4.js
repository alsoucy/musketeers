// Challenge 4:
// Generate an array of 50 elements and fill it with random numbers between 1-1000.
// Ask the user to input a number and check if it's in the array.
//    this will come back a string so need to parseInt
// If it is, return the position, otherwise display "number not found in the array";


// what I suggest, is to use a boolean "flag"
// that in the beginning you'll initialize as false
// and when you found what you're looking for, you can set it to true
// once you're done, then you can check its value and show an alert if the variable was found

//if guess is same as array element change rightGuess to true
//if guess is not the same as element, move on to the next element
//if after going through entire array, rightGuess is true return alert confirming number is present
//else alert number not found


var array = [];
function randomNum(min,max) {
for (var i = 1; i <= 50; i++) {
    var newNums = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(newNums)
  }
  console.log(array);
}
randomNum(1, 1000);

var guessNum = prompt('Please select a number between 1 and 1000 to see if it is in the random array.')
var rightGuess = false;
var position = [0];
for (var j = 0; j < array.length; j+=1) {
    if(array[j]===parseInt(guessNum)){
    rightGuess = true;
    position = j;
    }
  }
  if(rightGuess === true) {
    alert('Good job. That number is in the array at position ' + position +'.')
  } else {
    alert('Number not found in the array.');
    };


//using indexOf
 // var position = array.indexOf(parseInt(guessNum))
 // if(position > -1){
 //   alert('Good job. That number is in the array at position ' + position + '.')
 // } else {
 //   alert('Number not found in the array')
 // }


 // Challenge 5 (just in case anyone has some spare time until Saturday)
 // 1. Given the phrase below, find the longest word. Print the word and how many characters it has.
 // All the words are separated by spaces.
 // 2. Find the answer to the question below :
 // mystring = "How do you know the ocean greets you?";
 //
 // Output:
 // longest word: greets
 // number of characters: 6
 // look at the words, having them end in spaces?
 // look at word one compared to all the other words
 // arr[0] > arr[1]? yes
 // arr[0] > arr[2]? no
 // arr[2] > arr[3]? no
 // arr[3] > arr[4]? yes
 // arr[3] > arr[5]? no
 // arr[5] > arr[6]? no
 // arr[6] > arr[7]? yes
 //arr[6]  = longest word

 var myString = 'How do you know the ocean greets you?'
 var arr = myString.split(" ");
 console.log(arr);
 for (var i = 0; i <= arr.length-1; i++){
   var longword = arr[0];
    if(arr[i].length > longword.length){
      longword = arr[i];
    }
 }
 console.log(longword);
 console.log(longword.length);
