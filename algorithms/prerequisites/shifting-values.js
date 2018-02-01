// Assignment: Shifting the values in the array
// Given an array x (e.g. [1,5, 10, 7, -2]), create an algorithm (sets of instructions) that shifts each number by one (to the front).  For example when the program is done x (assuming it was [1,5,10,7,-2]) should become [5,10,7,-2, 0].
var arr = [1, 5, 10, 7, -2];
function shiftingValues(arr){
  for(var i = 0; i < arr.length - 1; i++){
    //remember the last value
    arr[i] = arr[i + 1];
  }
  arr[arr.length] = 0;
  return arr;
}

shiftingValues(arr);


