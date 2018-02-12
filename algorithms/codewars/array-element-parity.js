testArray = [1,-1,2,-2,3,3]

function arrayEleParity(arr){
    for (var i in arr){
        if (!arr.includes(-arr[i])){
            return arr[i];
        }
    }   

}

arrayEleParity(testArray);