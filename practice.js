//nested for loop practice
var msg1 = 'hello';
var msg2 = 'world!';

for(num1 = 1; num1<=msg1.length; num1++)
// num1<=5
{
  for(num2 = 1; num2<msg2.length; num2++)
  //num2<=6
  {
      if(msg1.length == 4)
      {
        console.log(msg1 + ''+ msg2);
      }
  }
  if(num1 !=4)
  {
    console.log(msg1.length + msg2.length);
  }
}
//create an ordered list from an array
var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}
function printList(list) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i+=1) {
   listHTML +='<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}
printList(playList);

//create searchable shopping list from array
var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while (true) {
  search = prompt("Search for a product in our store. Type 'list' to show all products and 'quit' to exit");
  search = search.toLowerCase();
  if (search === 'quit'){
    break;
  } else if (search === 'list' ) {
      print( inStock.join(', ') );
  } else {
    if (inStock.indexOf(search) > -1){
      print ('Yes, we have ' + search + ' in the store.');
    } else {
      print( search + ' is not in stock.');
    }
  }
}

// Code dojo challenge
// Given value of y, write a function that takes an array and returns the number of values that are greater than y. For example if array = [1, 3, 5, 7] and y = 3, your function will return the value of 2. (There are two values in the array greater than 3)
