// Assignment: Max, Min, and Average
// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that prints the maximum number in the array, minimum value in the array as well as the average values in the array.
var arr = [1, 5, 10, -2];
function maxMinAvg(arr){
  var max = 0;
  var min = 0;
  var sum = 0;
  //max
  for(var i in arr){
    if(arr[i] > max){
      max = arr[i];
    }
    if(arr[i] < min){
      min = arr[i];
    }
    sum += arr[i];
  }
  var avg = sum / arr.length;
  console.log('max: ' + max + ', min: ,' + min + ', avg: ' + avg);

}
maxMinAvg(arr);
