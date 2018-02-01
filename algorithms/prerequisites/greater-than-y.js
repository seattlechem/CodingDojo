//Greater than y
var arr = [1, 3, 5, 7];
var num = 4;

function greaterThanY(arr, num){
  var counter = 0;
  for(var i in arr){
    if(arr[i] > num){
      counter += 1;
    }
  }
  return counter;
}

greaterThanY(arr, num);