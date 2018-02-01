// Assignment: Random Array
// Create an array X and fill the array with 10 values, each value being a random integer between 0 to 100.  For example when your program is done, X could be something like this: [35, 15, 3, 39, 53, 93, 25, 39, 59, 21]

var arr = [];
function randomArray(arr){
  for(var i = 0; i < 11; i++){
    var num = Math.floor(Math.random() * 100);
    for(var z in arr){
      if(arr[z] === num){
        //redo select random number
        break;
      }
    }
    if(z === arr.length){
      arr[i] = num;
    }

  }
  return arr;
}

randomArray(arr);