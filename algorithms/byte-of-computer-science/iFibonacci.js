// Assignment: iFibonacci
// Write a function iFibonacci that behaves like the following:

// iFibonacci(0) = 0           => 0
// iFibonacci(1) = 1           => 1
// iFibonacci(2) = 1           => 1
// iFibonacci(3) = 1 + 1       => 2
// iFibonacci(4) = 1 + 2       => 3
// iFibonacci(5) = 2 + 3       => 5
// iFibonacci(6) = 3 + 5       => 8

function iFibonacci(num){
  var fib = [0, 1];
  for(var i = 0; i < num; i++){
    fib.push(fib[0] + fib[1]);
    fib.shift();
  }
  return fib[0];
}

iFibonacci(5);