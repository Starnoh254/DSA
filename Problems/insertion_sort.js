function insertionSort(arr){
    for (let i = 1; i < arr.length ; i ++ ){
        let key = arr[i]
        let j = i - 1;
        while (arr[j] > key && j >= 0){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}

console.log(insertionSort([2,7,9,1,5]))