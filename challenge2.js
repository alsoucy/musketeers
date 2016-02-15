// Given a string and a number n, return a new string where the char at index n has been removed.
// examples:
// missingChar("kitten", 1) → "ktten"
// missingChar("kitten", 0) → "itten"
// missingChar("kitten", 4) → "kittn"
// instead of returning, you can print it
// I suggest to start discussing the pseudo-code for it
// the string can either be hard-coded or you can ask the user for it, whichever you prefer
// same for the number


// you have multiple ways to solve this challenge
// one idea for the pseudo-code can be the following:
// get through all characters in a string (remember, the string can also be seen as an array)
// if the position isn't one we are looking for, then display the character,
// otherwise, just ignore it and go one to the next one and so on

//a given string
//a number n
//loop through characters in the string to get to character n
//don't show character n
//show all other characters
//new string where the character at n is removed

// if string1[i] = string1[n] {
//   do not display string1[n]
// } else {
//   display string[n]
// }
var string1 = prompt('please enter a word with at least 5 letters');
console.log(string1);
var n = prompt('please enter a number between 0 and ' + (string1.length - 1));
console.log(n);
for (var i = 0; i < string1.length; i++) {
  if( i !== parseInt(n)){
  document.write(string1[i]);
  }
};

// document.write(string2);

// var string2 = string1.replace(string1[n], "");
// document.write(string2);
