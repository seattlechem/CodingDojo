// function iSum(num){
//     var sum = 0;
//     for(var i = num; i = 0; i--){
//         sum += i;
//     }
//     return sum;
// }

function iSum(num){
    var sum = 0;
    console.log(num);
    console.log(typeof(num));
    for(var i = 1; i <= num; i++){
      sum += i;
    }
    return sum;
}
