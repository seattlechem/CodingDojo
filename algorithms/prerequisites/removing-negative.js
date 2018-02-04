// Assignment: Removing Negatives
// Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), write a program that removes any negative values in that array.  Once your program is done, the array should be composed of only the non-negative numbers, in their original order.  Do this without creating a temporary array; only use the pop() method to remove values from the array

var arr = [0, 1, 2, 3, 4, -5, 6];
function removeNegatives(arr){
  var numNeg = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      console.log('negative: ' + i);
      numNeg += 1;
    }else{
      console
      arr[i - numNeg] = arr[i];
      console.log('positive: ' + (i - numNeg));
      console.log('posivie i value: ' + i);
    }
  }
  console.log(arr);
  console.log(numNeg);
  //while numNeg is true? numNeg will be decreased by 1. Can it become -1?
  while(numNeg--){
    console.log(numNeg);
    arr.pop()
  }
  return arr;
}

removeNegatives(arr);