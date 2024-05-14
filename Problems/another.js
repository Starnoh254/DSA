const chunk = function(arr , size){
    const res = []
    let subarr = []
    for(let i = 0 ; i < arr.length ; i ++){
        subarr.push(arr[i])
        if(subarr.length === size){
            res.push(subarr)
            subarr = []
        }
    }
    if(subarr.length > 0 ){
        res.push(subarr)
    }
    return res
}

let array = [1,2,3,4,5];
let size = 1;

console.log(chunk(array, size));