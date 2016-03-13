// Given the following data:
// {"Bob", "555-123-4567"}
// {"John", "555-one-8901"}
// {"Pat", "123-678-9087"}
//
// 1. Create an object and add the above data
// 2. Write a function that checks if the phone number is a valid US phone number
// var PhoneBk = function(name, number){
//   this.name = name,
//   this.number = number
// }
//what to do when data is all in one array
var e = ["Bob, 555-123-4567", "John, 555-one-8901", "Pat, 123-678-9087"];
function getName(x){
  var nameStr = "";
  for(var i = 0; i < x.indexOf(","); i++){
    nameStr = nameStr + x[i];
  } return nameStr;
}

function getNumber(y){
  var numStr = "";
  for( var j = y.indexOf(",")+1; j < y.length; j++ ){
    numStr = numStr + y[j];
  } return numStr;
}

function isNumber(){

}
//OR (way preferred by Andrei)
//MAIN....
var PhoneBk = function(){
  this.name = "",
  this.number = ""
  this.country = "US"
}

var entry = new PhoneBk();
  entry.name = "Bob";
  entry.number = "555-123-4567";

console.log(entry.country);

// var person = ["Bob", "John", "Pat"];
// var number = ["555-123-4567", "555-one-8901", "123-678-9087"];
var myA = []
for(var i = 0; i < e.length; i++){
  myA[i] = new PhoneBk();
  myA[i].name = getName(e[i]);
  myA[i].number = getNumber(e[i]);
  // myA[i].name = getName(e[i]);
  }
  console.log(myA);
  console.log(myA[1].name);

var pn1 = "555a123";
var pn2 = "aabbadbcd";
var x1 = pn1.search(/[0-9"]+/);
var x2 = pn2.search(/b.*b/);
var x3 = pn2.search(/bb[^b]+b/); //^=NOT
var x4 = pn2.search(/[^"0-9\s\.\-]/)
//if not any of the following then it isn't a phone number b/c those aren't allowed
// if(/[^"0-9\s\.\-]/


// Given the following data:
// {"Bob", "ATTCGCAAATAG"}
// {"John", "CATGGCCCCTAG"}
// {"Pat", "AAACCCGACTAG"}
//
// 1. Create an object and add the above data
// 2. For each DNA sequence, split it into codons (set of three nucleotides) separated by spaces.
// 3. Write a function that returns and updates the complementary strand for each person. (A complementary strand means A is replaced by T, T by A, C by G and G by C).

// Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs" (number) and "tails" (number). Now create two "dogs" with two different names and same number of legs and tails.
function myDog(name, legs, tails){  //this way is just in js
  this.name = name;
  this.legs = legs;
  this.tails = tails;
}

var fido = new myDog("Fido", 4, 1);
var spot= new myDog("Spot", 4, 1);
