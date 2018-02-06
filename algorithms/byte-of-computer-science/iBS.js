// Assignment: iBS
// Write a function iBS that behaves like the following:

// var arr = [-90,-19,0,2,12,29,33,190,320];
// iBS(arr, 5)              => false
// iBS(arr, 12)             => 4
// iBS(arr, 0)              => 2
// iBS(arr, 190)            => 7
// iBS takes in an array and a value to search for. If the value is found in the array then iBS will return the index where the found value is. If the value is not found in the array then iBS returns false. Make sure your solution is iterative.

// Pseudocode
// 1. Set lower bound to first position of array

// 2. Set upper bound to last position of array

// 3. While lower bound is less than or equal to the upper bound do the following steps:

// Set midpoint as upper bound plus lower bound divided by 2
// If midpoint element is less than the data being searched for, set new lower bound to midpoint + 1
// If midpoint element is greater than the data being searched for, set new upper bound to the midpoint - 1
// else midpoint is the found element

var arr = [-90,-19,0,2,12,29,33,190,320];

function iBS(arr, num){
  var lowerBound = 0;
  var upperBound = arr.length - 1;
  while(lowerBound <= upperBound){
    var mid = Math.floor((lowerBound + upperBound) / 2);
    if(arr[mid] < num){
      lowerBound = mid + 1;
    }else if(arr[mid] > num){
      upperBound = mid - 1;
    }else{
      return mid;
    }
  }
}


iBS(arr, 2);