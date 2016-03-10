//Given the array below, sort it using the insertion method (http://www.algorithmist.com/index.php/Insertion_sort).
//var myArray=[64, 8,32,16,8,4,2];
// a is an array of size N
// for i from 1 to N
//    key = a[i]
//    j = i - 1
//    while j >= 0 and a[j] > key
//       a[j+1] = a[j]
//       j = j - 1
//    a[j+1] = key
array1=[64, 8, 32, 16, 8, 4, 2]
function insertSort(array){
  for( var i = 1; i < array.length; i++){
    var temp = array[i];
    for(var j = i-1; j >= 0; j++){
      if(array[j] > array[i]){          //is 8 greater than 64? no
        array[j+1] = array[j];          //8 becomes a[0]
      }
      array[i] = temp;
    }
  }
}
console.log(insertSort(array1));

function insertionSort(input) {
    var activeNumber;
    for (var i = 1; i < input.length; i++) {
        activeNumber = input[i];
        for (var j = i - 1; j >= 0; j--) {
            if (input[j] > activeNumber) {
                input[j + 1] = input[j];
            } else {
                break;
            }
        }
        input[j + 1] = activeNumber
    }
}

var myinput = [24, 10, 17, 9, 5, 9, 1, 23, 300];
console.log(insertionSort(myinput));




function insertionSort(unsorted) {
    for(var i = 0; i < unsorted.length; i++) {
    var tmp = unsorted[i]; //Copy of the current element.
    /*Check through the sorted part and compare with the
    number in tmp. If large, shift the number*/
    for(var j = i - 1; j >= 0 && (unsorted[j] > tmp); j--) {
      //Shift the number
      unsorted[j+1] = unsorted[j];
    }
    //Insert the copied number at the correct position
    //in sorted part.
    unsorted[j+1] = tmp;
  }
}
var ul = [64, 8,32,16,8,4,2];
insertionSort(ul);
console.log(ul);
