// Assignment: Eliminate Negative Numbers
// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that replaces any negative number with the value of 0.  When the program is done x should have no negative values (e.g. [1, 5, 10, 0]).

var arr = [1, 5, 10, -2];
function eliminateNegativeNum(arr){
  for(var i in arr){
    if(arr[i] < 0){
      arr[i] = 0;
    }
  }
  return arr;
}

eliminateNegativeNum(arr);

