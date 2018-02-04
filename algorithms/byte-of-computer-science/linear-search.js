var arr = [1, 2, 3, 4];
function linearSearch(num, arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return true;
        }
    }
    if(i === arr.length){
        return false;
    }
}