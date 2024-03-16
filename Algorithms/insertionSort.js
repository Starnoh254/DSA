function insertionSort(arr) {
  let index;
  let numberToInsert;
  for (let i = 1; i < arr.length; i++) {
    index = i - 1;
    numberToInsert = arr[i];
    while (index >= 0 && numberToInsert < arr[index]) {
      arr[index + 1] = arr[index];
      index--;
    }
    arr[index + 1] = numberToInsert;
  }
}

const inputArray = [
  1, 2, 34, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
insertionSort(inputArray)
console.log(inputArray);
