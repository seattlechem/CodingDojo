// Write a program that would print the sum of all the odd numbers from 1 to 5000
function sumOfAllOdd(){
  var sumOdd = 0;
  for(var i = 0; i < 5000; i++){
    if(i % 2 !== 0){
      sumOdd += i;
    }
  }
  return sumOdd;
}
sumOfAllOdd();