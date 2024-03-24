function selectionSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    let smallest = arr[j];
    for (let i = 0; i < arr.length; i++) {
      if (smallest < arr[i]) {
        let temp;
        temp = smallest;
        smallest = arr[i];
        arr[i] = temp;
        arr[j] = smallest;
        
      }
    }
  }
  console.log(arr);
}

selectionSort([6, 9, 15,77, 2, 1, 8]);
