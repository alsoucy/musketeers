//Challenge 6
// Write a function that will get the Nth Fibonacci number?
//Fibonacci number = each number is found by adding the two preceding numbers
//  example: 0,1,1,2,3,5,8,13,21,34
// The function should have the number N as parameter and will return the Fibonacci number at position N.
// Example:
// If N is 11, it should return 55.
// that is because the Fibonacci sequence for the first 10 positions is:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// and 55 is calculated based on the last two positions (21+34)
// fibo(n) = fibo(n - 1) + fibo(n - 2)

// function fibo(11) = 55
// fibo[0] = 0
// fibo[1] = 1
// fibo[2] = 1
// fibo[3] = 2
// fibo[4] = 3
// fibo[5] = 5
// fibo[6] = 8
// fibo[7] = 13
// fibo[8] = 21
// fibo[9] = 34
// fibro[10] = 55
// fibro[11] = 89
// fibro[12] = 144

  function fib1(n){
  var x = 0;
  var y = 1;
  if(n <= 2){
    return n-1;
  }
  for( var i = 0; i < n; i++){
    var tempY = y;
    y = tempY + x;
    x = tempY;
    }
  return y;
}
console.log(fib1(10));

function fib(n) {
  var result = 0;
  if (n <= 2){
    return n-1;
  }
  result = fib(n-1) + fib(n-2);
  return result;
};
console.log(fib(7));
