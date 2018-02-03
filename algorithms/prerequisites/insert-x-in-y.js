// Assignment: Insert X in Y
// Write a program that inserts a new number X at an index Y. For example if array = [1, 3, 5, 7] and X = 10, and Y = 2, by the end of your program array should be [1, 3, 10, 5, 7] (in other words we added '10' on index 2). Check the output of your array once your program is completed to make sure it's working correctly

// var arr = [1, 3, 5, 7];
// function insertXinY(arr, x, y){
//   arr.splice(y, 0, x);
// }

// insertXinY(arr, 10, 2);
// console.log(arr);

// [1, 3, 5, 7, 0]
// [1, 3, 5, 0, 7]
// [1, 3, 0, 5, 7]

// var arr = [1, 3, 5, 7, 9, 11];
// function insertXinY(arr, y, x){
//   arr.push(0);
//   // length changed 4 -> 5
//   // [1, 3, 5, 7, 0]
//   var temp = x;
//   for(var i = 0; i < (arr.length - 1) - y; i++){
//     temp = arr[arr.length - (i + 2)];
//     arr[arr.length - (i + 2)] = x;
//     arr[arr.length - (i + 1)] = temp;
//     console.log('counter');
//   }
//   return arr; 
// }

var arr = [1, 3, 5, 7];
function insertXinY(arr, y, x){
  arr.push(0);
  for(var i = arr.length - 1; i > y; i--){
    arr[i] = arr[i - 1];
  }
  arr[y] = x;
  return arr;
}
insertXinY(arr, 2, 0);
