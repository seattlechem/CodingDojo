//Create an array containing all odd numbers from 1 to 255.


// function arrayWithOddNum(){
//   var arr = [];
//   for(var i = 1; i <= 255; i++){
//     if(i % 2 !== 0){
//       arr.push(i);
//     }
//   }
//   return arr;
// }


function arrayWithOddNum(){
  var arr = [];
  for(var i = 1; i <= 255; i += 2){
    arr.push(i);
  }
  return arr;
}
arrayWithOddNum();