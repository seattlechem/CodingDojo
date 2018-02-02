// var arr = [];
// for(var i = 0; i < 10; i++){
//   var indicator = false;
//   // var num = Math.floor(Math.random() * 101);
//   console.log(num);
//   while(indicator == false){
//     var num = Math.floor(Math.random() * 101);
//     console.log(num);
//     if(arr.includes(num) === false){
//       break;
//     }
//   }
//   arr.push(num);
      
// }

// while(arr.length < 10){
//   var num = Math.floor(Math.random() * 100);
//   if(arr.includes(num) === false){
//     arr.push(num);
//   }
// }

const set1 = new Set([]);
while (set1.size < 10){
  var num = Math.floor(Math.random() * 100);
  if(set1.has(num) === false){
    set1.add(num);
  }
}
const set2 = set1[Symbol.iterator]();
var arr = [];
for (var i = 0; i < 10; i++){
  arr.push(set2.next().value);
}

console.log(arr);