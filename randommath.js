/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//find an avg
function findAvg(arr) {
    var total = 0;
    var avg = 0;
    for( var i = 0; i < arr.length; i+=1) {
       total += arr[i];
       avg = total/arr.length;
    }
    return avg;
}
//find a min
var min = array[0];
for(var i = 0; i < array.length; i++) {
  if( array[i] < min) {
    min = array[i];
  }
}
//find a max
var max = array[0];
for(var i = 0; i < array.length; i++) {
  if( array[i] > max) {
    max = array[i];
  }
}
