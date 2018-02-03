// Assignment: Removing Negatives
// Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), write a program that removes any negative values in that array.  Once your program is done, the array should be composed of only the non-negative numbers, in their original order.  Do this without creating a temporary array; only use the pop() method to remove values from the array

var arr = [0, -1, 2, -3, 4, -5, 6];
for(var i in arr){
  if(arr[i] < 0){
    arr.pop(i);
  }
}
console.log(arr);