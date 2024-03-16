function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        const bucket = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = bucket;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}
const inputArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
console.log(bubbleSort(inputArray));
