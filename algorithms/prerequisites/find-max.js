//[-3, 3, 5, 7] Find Max
var arr = [-3, 3, 5, 7];
function findMax(arr){
  var max = 0;
  for(var i in arr){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

findMax(arr);