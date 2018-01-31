//print all the odd numbers from 1 to 1000
var odd = '';
for(var i = 0; i < 1000; i++){
  if(i%2 !== 0){
    odd += i;
    odd += ', ';
    
  }
}
var odd2 = odd.slice(0, -2);
console.log(odd2);