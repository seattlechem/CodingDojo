//[-3, 3, 5, 7] Find Average
var arr = [-3, 3, 5, 7];

function findAverage(arr){
  var sum = 0;
  var avg = 0;
  for(var i in arr){
    sum += arr[i];
  }
  
  avg = sum / arr.length;
  return avg;
}

findAverage(arr);